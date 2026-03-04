import {test,expect} from '@playwright/test';

test('Select all the Advance cousrses with java ',async({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-table/")
   await page.mouse.wheel(0, 500);
    await page.getByLabel('Java').check();
    await page.getByLabel('Beginner').click();
    await page.getByLabel('Intermediate').click();
    await page.mouse.wheel( 500,750);


    const rows= page.locator("table#courses_table tr  ")
    const matchedRow =  rows
   .filter({has:page.locator('td')})
   .filter({hasText:'Advanced'})
   .filter({hasText:'Java'});

       
//     const locator = page
//   .locator('.card')
//   .filter({ hasText: 'John' })
//   .filter({ hasText: 'Admin' });
    console.log('number of rows',await matchedRow.count())
    for(let i=0;i< await matchedRow.count();i++){
        const currentRow=matchedRow.nth(i)
       
        
       const tds= await currentRow.locator('td').nth(1).textContent();
       console.log(tds);

    }




//     const count=rows.count();
//     for (let i = 0; i < count; i++) {
//   const courseName = await rows.nth(i).locator('td').nth(2).allTextContentstextContent();
//   console.log(courseName);
//     }


    // await page.waitForTimeout(3000);

})