import {test, expect, Browser, Page, chromium} from '@playwright/test'

test.describe.serial('Flow across test cases',async () => {

    let browser: Browser;
    let page: Page;

    test.beforeAll(async () => {
        browser = await chromium.launch({ headless: true });
        page = await browser.newPage();
    });

    test.afterAll(async () => {
        await browser.close();
    });

    test('Entering todos', async ({}) => {
        // const browser:Browser = await chromium.launch({headless:false});
        // const page:Page = await browser.newPage();
        await page.goto('https://demo.playwright.dev/todomvc/#/');
        const title = page.getByRole('heading', {name:'todos'});
        expect(title).toBeVisible();
        const addtodo = page.getByPlaceholder('What needs to be done?');
        await addtodo.fill('Bread');
        await page.keyboard.press('Enter');
        await addtodo.fill('Butter');
        await page.keyboard.press('Enter');
        await addtodo.fill('Milk');
        await page.keyboard.press('Enter');
        await addtodo.fill('Car wash');
        await page.keyboard.press('Enter');
        await addtodo.fill('Bike servicing');
        await page.keyboard.press('Enter');
    });

    test('check Active Todos', async ({}) => {
        const active = page.getByText('Active');
        await active.click();
    });

    test('check Completed Todos', async ({}) => {
        const completed = page.getByText('Completed');
        await completed.click();
        const all = page.locator('//a[text()="All"]');
        await all.click();
    });

    test('single check', async ({}) => {
        const checkme = await page.$$('//input[@type="checkbox"]');
        const checkmete = await page.$$('//input[@type="checkbox"]/following-sibling::label');
        for(let i=0; i<checkmete.length; i++){
            const text = await checkmete[i].textContent();
            if(text === 'Milk'){
                await checkme[i].check();
            }
        }
    });

    test('clear', async ({}) => {
        const clear = page.getByRole('button', {name: 'Clear completed'});
        await clear.click();
        
        page.screenshot({path:'screenshot_1.png'})
    });

});