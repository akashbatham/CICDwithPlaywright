import {test, expect, Browser, Page, chromium} from '@playwright/test'

test.describe.serial('Flow across test cases',async () => {

    let browser: Browser;
    let page: Page;

    test.beforeAll(async () => {
        browser = await chromium.launch({ headless: false });
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
        expect(title).toBeVisible(); //toBeVisible is used to check if the element is visible on the page.
        const addtodo = page.getByPlaceholder('What needs to be done?');
        await addtodo.fill('Bread');
        await page.keyboard.press('Enter'); //Enter key is used to perform the Enter keyboard action.
        await addtodo.fill('Butter');
        await page.keyboard.press('Enter');
        await addtodo.fill('Milk'); //fill is used to fill the input field with the given text.
        await page.keyboard.press('Enter');
        await addtodo.fill('Car wash');
        await page.keyboard.press('Enter');
        await addtodo.fill('Bike servicing');
        await page.keyboard.press('Enter');
    });

    test('check Active Todos', async ({}) => {
        const active = page.getByText('Active');
        await active.click(); //click is used to click the element.
    });

    test('check Completed Todos', async ({}) => {
        const completed = page.getByText('Completed'); //getByText is used to get the element by the text.
        await completed.click();
        const all = page.locator('//a[text()="All"]'); //locator is used to get the element by the locator.
        await all.click();
    });

    //WORKING CODE
    // test('single check', async ({}) => {
    //     const checkme = await page.$$('//input[@type="checkbox"]'); //$$ is used to get all the elements by the locator.
    //     const checkmete = await page.$$('//input[@type="checkbox"]/following-sibling::label');
    //     for(let i=0; i<checkmete.length; i++){
    //         const text = await checkmete[i].textContent(); //textContent is used to get the text content of the element.
    //         if(text === 'Milk'){
    //             await checkme[i].check(); //check is used to check the checkbox.
    //         }
    //     }
    // });
    
    //Working Code
    test('list check', async ({}) =>{
        //const todoItem = page.getByRole('listitem').filter({ hasText: 'Milk' }); //filter is used to filter the elements by the text.
        const checkbox = page.getByTestId('todo-item').filter({ hasText: 'Milk' }).getByRole('checkbox');
        await checkbox.check();

    });

   test('clear', async ({}) => {
        const clear = page.getByRole('button', {name: 'Clear completed'});
        await clear.click();
        await page.waitForTimeout(1000); //waitForTimeout is used to wait for the given time.
        await page.screenshot({path:'screenshot_1.png'}); //screenshot is used to take a screenshot of the page.
    });

});