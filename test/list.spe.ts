import {test, Page, chromium, BrowserContext, expect} from "@playwright/test";

test('working list', async ({}) => {
    const browser:BrowserContext = await chromium.launchPersistentContext('',{headless:true});
    
    //getting the list of pages or tabs in the browser
    const pages = browser.pages();
    const page:Page = pages[0];


    await page.goto('https://demo.playwright.dev/todomvc/#/');
    const addtodo = page.getByPlaceholder('What needs to be done?');
    await addtodo.fill('Bread');
    await page.keyboard.press('Enter'); //Enter key is used to perform the Enter keyboard action.
    await addtodo.fill('Butter');
    await page.keyboard.press('Enter');
    await addtodo.fill('Carter');
    await page.keyboard.press('Enter');
    await addtodo.fill('Milk'); //fill is used to fill the input field with the given text.
    await page.keyboard.press('Enter');
    await addtodo.fill('Car wash');
    await page.keyboard.press('Enter');
    await addtodo.fill('Bike servicing');
    await page.keyboard.press('Enter');
    
    const list = page.getByTestId('todo-item');
    const name = list.filter({hasText:'Milk'});
    // console.log(await name.count());
    const pname = await name.textContent();
    // console.log(pname);
    console.log(expect(pname).toBe('Milk')); //gives UNDEFINED as result if True else gives error
    // console.log(booot);
    console.log(pname === 'Milk'); //performs boolean operation gives true or false

});