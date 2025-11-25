import { test, Page, Browser, chromium, BrowserContext } from '@playwright/test';

test('mouse Hover', async ({ }) => {
    // const browser:Browser = await chromium.launch({headless:true});
    // const page:Page = await browser.newPage();

    const browser: Browser = await chromium.launch({ headless: true });

    //newContext is used to create a new BROWSER PAGE FOR EVERY WINDOW.
    const bcon: BrowserContext = await browser.newContext();
    const page1 = await bcon.newPage(); //newPage is used to create a new page.

    //DEFINING A CONSTANT FOR MOUSE
    const mouse = page1.mouse;
    await page1.goto('https://rahulshettyacademy.com/AutomationPractice/');

    //HOVERING ON BUTTON
    const btn = page1.getByRole('button', { name: 'Mouse Hover' });
    await btn.hover(); //hover on button
    await page1.waitForTimeout(1000);

    //CLICKING ON LINK
    const option = page1.getByRole('link', { name: 'Top' });
    await option.click();

    //FINDING COORDINATES OF TEXTBOX
    const txtbx = page1.getByPlaceholder('Type to Select Countries');
    const box = await txtbx.boundingBox();
    console.log(box);

    //ASSIGNING VALUES
    const { x, y, height, width } = box as { x: number, y: number, height: number, width: number };
    console.log('x:', x);
    console.log('y:', y);
    console.log('height:', height);
    console.log('width:', width);

    //CLICKING USING COORDINATES
    await mouse.click(x + width / 2, y + height / 2, { button: 'right' });
    await page1.screenshot({ path: 'screenshot_1.png' });

    await page1.mouse.wheel(0, 5000);
    await page1.waitForTimeout(10000);
    await browser.close();
});

test.skip('Mouse actions', async ({ }) => {
    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();
    await page.goto('https://nextrepair.info/en/tools/mouse');
    const testarea = page.locator('//div[@id="test-area"]');
    const area = await testarea.boundingBox();
    console.log(area);
    const { x, y, width, height } = area as { x: number, y: number, width: number, height: number };
    console.log(x, y, width, height);
    const X = width / 2;
    const Y = height / 2;
    //Performing a left double click
    await page.mouse.dblclick(x + X, y + Y, { button: 'left' });
    const area2 = await testarea.boundingBox();
    console.log(area2);
    const leftclickcount = page.locator('//div[@id="left-click-count"]');
    console.log("After Click", await leftclickcount.textContent());

    await page.mouse.dblclick(x + width / 3, y + height / 3, { button: 'right' });
    console.log("Right Click Count :", await page.locator('//div[@id="right-click-count"]').textContent());

    await page.mouse.wheel(0, 600);
    await page.waitForTimeout(5000);
});