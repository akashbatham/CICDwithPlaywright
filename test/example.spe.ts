import { test, expect, Browser , chromium, Page, Locator} from '@playwright/test';


// test('register', async ({}) => {


//   const browser:Browser = await chromium.launch({headless:true});
//   const page:Page = await browser.newPage();

//   //NAVIGATE TO THE REGISTER PAGE
//   await page.goto("http://localhost:3000/register.html");

//   //HANDLING A TEXT FIELD
//   const username:Locator = page.locator('css=input[name="username"]');
//   await username.fill("AkashBatham");
//   const email:Locator = page.locator('//input[@name="email"]');
//   await email.fill("akash@yopmail.com");
//   const phone:Locator = page.getByLabel('phone');
//   await phone.fill('234465643');
//   await page.getByPlaceholder('Password').fill('qwe1234');
//   await page.getByTestId('confirmPassword').fill('qwe1234');

//   //HANDLING A DROP DOWN
//   const country:Locator = page.getByTestId("country");
//   await country.selectOption("India");
//   // const countries = await page.$$('//select[@id="country"]//option'); //This will return all the options in the dropdown
//   // for (const e of countries){
//   //   const countryName = await e.textContent();
//   //   console.log(countryName);
//   //   if (countryName == "India"){
//   //     await e.click();
//   //     break;
//   //   }
//   // }
//   // console.log(await country.inputValue());

//   const state:Locator = page.getByRole('combobox', { name: 'State' });
//   await state.selectOption("Delhi");
//   console.log(await state.inputValue()); //This will print the value of the state dropdown
//   const city = "select#city";
//   //await page.selectOption(city, { value:'New Delhi'});
//   //await page.selectOption(city, { label:'New Delhi'});
//   await page.selectOption(city, { index:2});
//   //await page.selectOption(city,'New Delhi');
//   //END OF HANDLING A DROP DOWN

//   //HANDLING A CHECKBOX
//   const checkbox:Locator = page.getByLabel('I accept the privacy policy');
//   await checkbox.check();


//   const registerBtn = page.locator('//button[@data-testid="registerButton"]');
//   await registerBtn.click();

  
//   //TAKING A SCREENSHOT
//   page.screenshot({path: './TestShot/Screenshot_1.png'});

//   await new Promise(() =>{});
//});


// test('login', async ({page})=>{
//   const browser:Browser = await chromium.launch({headless:false});
//   await page.goto('http://localhost:3000/login.html');
//   //await page.getByLabel('Username or Email').fill('AkashBatham');
//   const username:Locator = page.getByRole('textbox',{name:'Username or Email'});
//   await username.fill('AkashBatham');
//   await page.getByRole('textbox',{name:'Password'}).fill('qwe1234');
//   await page.getByTestId('loginButton').click();

//   page.waitForTimeout(5000)

//   page.screenshot({path: './TestShot/Screenshot_1.png'});
//   await new Promise(()=>{});
//   await browser.close();
// });

test('scrollbar', async ({page})=>{
  const browser:Browser = await chromium.launch({headless:false});
  await page.goto('http://localhost:3000/login.html');
  const iframe:Locator = page.locator('//iframe[@id="zoomFrame"]');
  const text = await iframe.textContent();
  console.log(text);
  page.waitForTimeout(5000);
  await browser.close();
});