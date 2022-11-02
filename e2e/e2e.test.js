import puppeteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000); // default puppeteer timeout

describe('Batton tooltip', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:8888';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppeteer.launch({
      // headless: false, // show gui
      // slowMo: 50,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('a tooltip appears when you click', async () => {
    await page.goto(baseUrl);

    const btn = await page.$('.btn');

    await btn.click();

    await page.waitForSelector('.container-btn-message');
  });
});
