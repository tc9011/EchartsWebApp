import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser'
import * as puppeteer from 'puppeteer';
import * as fs from 'fs';
const app = new Koa;

app.use(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://www.jd.com');
    await page.setViewport({
        width: 1200,
        height: 800
    });
    await page.screenshot({path: 'jd.png'});

    await browser.close();
});

app.listen(3000);

export default app;