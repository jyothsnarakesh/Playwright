import {test,expect} from '@playwright/test';

test('Select all the Advance cousrses with java ',async({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-table/")
   await page.mouse.wheel(0, 500);
    await page.getByLabel('Java').check();
    await page.getByLabel('Beginner').click();
    await page.getByLabel('Intermediate').click();
    await page.mouse.wheel( 500,750);

     const rows= page.locator("table#courses_table tr  ")
     
    //  console.log( await rows.allTextContents());
 
 for (let i=0;i<await rows.count();i++){
     console.log("hi")
     const  r1= await rows.locator('td').nth(2).textContent();
 const r2=await rows.locator('td').nth(3).textContent();
    if(r1=='Java'&& r2=='Advanced'){
       
        const courseName=await rows.locator('td').nth(1).textContent();
        console.log(courseName);
    }

 }


    

})