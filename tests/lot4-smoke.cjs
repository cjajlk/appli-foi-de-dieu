const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

const root = path.resolve(process.argv[2] || path.join(__dirname, '..'));
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.webmanifest': 'application/manifest+json' };
const server = http.createServer((req, res) => {
  const pathname = new URL(req.url, 'http://localhost').pathname;
  const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
  try {
    if (!file.startsWith(root + path.sep)) throw Error('Invalid path');
    res.setHeader('Content-Type', mime[path.extname(file)] || 'application/octet-stream');
    res.end(fs.readFileSync(file));
  } catch {
    res.writeHead(404).end();
  }
});

async function settle(page) {
  await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(() => requestAnimationFrame(resolve)))));
}

async function main() {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const url = 'http://127.0.0.1:' + server.address().port;
  const browser = await chromium.launch({ channel: process.env.BROWSER_CHANNEL || 'msedge' });
  const result = { readerChecks: 0, widths: [320, 360, 390, 1440], errors: [] };
  try {
    for (const width of result.widths) {
      const context = await browser.newContext({ viewport: { width, height: 800 }, hasTouch: width < 400, isMobile: width < 400 });
      const page = await context.newPage();
      page.on('pageerror', error => result.errors.push(error.message));
      await page.goto(url);
      await page.evaluate(() => {
        state.favorites = ['matin'];
        state.personal = [{ id: 'lot4-test', title: 'Prière personnelle', text: 'Texte de contrôle.' }];
        setReadingSize(36);
        localStorage.setItem(LEARNING_STORE, JSON.stringify({ version: 1, enabled: true, entries: { 'ess-messe': { seen: 1, ratio: .3 } }, last: 'ess-messe' }));
      });
      await page.reload();
      await page.locator('[data-route=bible]').click();
      await page.locator('[data-go=bible-discovery]').click();
      await page.locator('[data-go=bible-stories]:not([data-id])').click();
      assert.match(await page.locator('#library-status').innerText(), /12 récits/);
      await page.locator('[data-library-page="2"]').click();
      assert.equal(await page.locator('#library-results [data-go=bible-story]').count(), 2);
      await page.locator('#library-query').fill('moise');
      assert.equal(await page.locator('#library-results [data-go=bible-story]').count(), 1);
      await page.locator('[data-id=recit-exode]').click();
      assert.equal(await page.locator('.extended-lesson h2').count(), 5);
      await page.locator('[data-back]').click();
      await page.waitForFunction(() => state.route === 'bible-stories');
      assert.equal(await page.locator('#library-query').inputValue(), 'moise');
      await page.locator('[data-id=recit-exode]').click();
      await settle(page);
      await page.evaluate(() => {
        scrollTo({ top: (document.documentElement.scrollHeight - innerHeight) * .48, behavior: 'instant' });
        go('bible-discovery');
      });
      await page.reload();
      await page.locator('[data-resume-lesson=recit-exode]').click();
      await settle(page);
      assert.ok(await page.evaluate(() => Math.abs(scrollY / (document.documentElement.scrollHeight - innerHeight) - .48) < .03));
      await page.locator('[data-fav=recit-exode]').click();
      await page.reload();
      assert.equal(await page.locator('[data-fav=recit-exode]').getAttribute('aria-pressed'), 'true');
      await page.evaluate(() => go('favorites'));
      assert.equal(await page.locator('[data-id=matin], [data-id=recit-exode]').count(), 2);
      assert.deepEqual(await page.evaluate(() => [state.size, state.personal[0].id, learning.entries['ess-messe'].ratio]), [36, 'lot4-test', .3]);

      await page.evaluate(() => go('bible-themes'));
      assert.equal(await page.locator('[data-go=bible-theme]').count(), 6);
      await page.locator('[data-id=theme-psaume-pardon]').click();
      assert.equal(await page.locator('.source a[href*="ebible.org"]').count(), 2);
      assert.equal(await page.locator('[data-go=reading]').count(), 0);
      await page.evaluate(() => go('bible-theme', 'theme-psaume-confiance'));
      await page.locator('[data-go=reading][data-id=ps23]').click();
      assert.equal(await page.locator('#speak').count(), 1);

      const items = await page.evaluate(() => BIBLE_DISCOVERY_ITEMS.map(item => [learningRoute(item.id), item.id]));
      assert.equal(items.length, 19);
      for (const [route, id] of items) {
        await page.evaluate(([route, id]) => go(route, id), [route, id]);
        await settle(page);
        const layout = await page.evaluate(() => {
          scrollTo({ top: document.documentElement.scrollHeight, behavior: 'instant' });
          return {
            overflow: document.documentElement.scrollWidth > innerWidth,
            clearBottom: document.querySelector('main').getBoundingClientRect().bottom < document.querySelector('.bottom-nav').getBoundingClientRect().top,
            font: getComputedStyle(document.querySelector('.lesson-body p')).fontSize
          };
        });
        assert.deepEqual(layout, { overflow: false, clearBottom: true, font: '36px' }, width + ' ' + id);
        result.readerChecks++;
      }
      assert.deepEqual(await page.evaluate(() => [PRAYERS.length, LESSONS.length, FAITH_QUESTIONS.length, READINGS.length]), [30, 23, 8, 7]);
      await page.evaluate(() => go('consulted'));
      await page.locator('#learning-enabled').uncheck();
      assert.deepEqual(await page.evaluate(() => [Object.keys(learning.entries).length, state.favorites.includes('recit-exode')]), [0, true]);
      await page.evaluate(() => go('bible-story', 'recit-creation'));
      assert.equal(await page.evaluate(() => Object.keys(learning.entries).length), 0);
      await context.close();
    }
    assert.deepEqual(result.errors, []);
    console.log(JSON.stringify(result, null, 2));
  } finally {
    await browser.close();
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
}).finally(() => server.close());
