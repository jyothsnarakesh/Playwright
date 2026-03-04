const { test, expect } = require('@playwright/test');

test('Print Course Name where Language is Java and Level is Advanced', async ({ page }) => {
  
  await page.goto('https://practicetestautomation.com/practice-test-table/');

   await page.mouse.wheel(0, 500);
    await page.getByLabel('Java').check();
    await page.getByLabel('Beginner').click();
    await page.getByLabel('Intermediate').click();
    await page.mouse.wheel( 500,750);


  
  const rows =  page.locator(' table tbody tr  ');
  const rowCount = await rows.count();

  for (let i = 0; i < rowCount; i++) {
    const row = rows.nth(i);

    const language = await row.locator('td').nth(2).textContent();
    const level = await row.locator('td').nth(3).textContent();

    if (language=== 'Java' && level === 'Advanced') {
      const courseName = await row.locator('td').nth(1).textContent();
      console.log( courseName);
    }
  }
});