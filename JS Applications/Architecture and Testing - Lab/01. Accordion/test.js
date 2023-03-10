const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

// async () => {
//     const browser = await chromium.launch();
//     const page = await browser.newPage();
//     await page.goto('http://google.com');
//     await browser.close();
// };


let browser, page;

describe('E2E tests', async function () {
    this.timeout(6000);

    before(async () => { browser = await chromium.launch(); });
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });


    it('load static page', async () => {
        await page.goto('http://127.0.0.1:5500/01.%20Accordion/');
        //await page.screenshot({path: 'test.png'});
        const titles = await page.locator('div.head>span').allTextContents();

        expect(titles[0]).to.equal('Scalable Vector Graphics');
        expect(titles[1]).to.equal('Open standard');
        expect(titles[2]).to.equal('Unix');
        expect(titles[3]).to.equal('ALGOL');
    });

    it('button “More” functionality', async () => {
        await page.goto('http://127.0.0.1:5500/01.%20Accordion/');
        
        await page.getByText('More').first().click();
        
        const visible = await page.isVisible('div.extra');
        expect(visible).to.be.true;
        
        const content = await page.locator('div.extra p').first().allTextContents();
        expect(content.length).to.be.greaterThan(0);
    });
});