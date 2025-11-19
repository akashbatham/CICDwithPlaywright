import {test, Page, Browser, chromium, BrowserContext} from '@playwright/test';

test('mouse Hover', async({}) => {
    // const browser:Browser = await chromium.launch({headless:true});
    // const page:Page = await browser.newPage();

    const browser:Browser = await chromium.launch({headless:false});
    const bcon:BrowserContext = await browser.newContext(); //newContext is used to create a new browser context.
    const page1 = await bcon.newPage(); //newPage is used to create a new page.

    await page1.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const btn = page1.getByRole('button',{name:'Mouse Hover'});
    await btn.hover(); //hover on button
    await page1.waitForTimeout(1000);
    const option = page1.getByRole('link',{name: 'Top'});
    await option.click();
    const txtbx = page1.getByPlaceholder('Type to Select Countries');
    const box = await txtbx.boundingBox();
    console.log(box);
    const {x,y,height, width} = box as {x:number,y:number,height:number,width:number};
    console.log('x:',x);
    console.log('y:',y);
    console.log('height:',height);
    console.log('width:',width);
    await page1.mouse.click(x+width/2,y+height/2,{button:'right'});
    await page1.screenshot({path:'screenshot_1.png'});
    await page1.waitForTimeout(10000);
    await browser.close();
});