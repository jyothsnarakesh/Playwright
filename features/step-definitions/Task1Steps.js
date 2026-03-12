const { Given, When, Then, Before, After,setDefaultTimeout } = require('@cucumber/cucumber')
const { chromium } = require('playwright')
const CoursePage = require('../../pages/Task1page')
// const { setDefaultTimeout } = require('@cucumber/cucumber');

setDefaultTimeout(60*1000)

let browser
let page
let coursePage

Before(async function(){

browser = await chromium.launch({headless:false})
const context = await browser.newContext()
page = await context.newPage()

coursePage = new CoursePage(page)

})

Given('I open the course table page', async function () {

await coursePage.openPage()

})

When('I apply filters for Java and Advanced courses', async function () {

await coursePage.applyFilters()

})

Then('I print the course names', async function () {
    
await new Promise(resolve => setTimeout(resolve, 5000)); 

await coursePage.printCourses()


})

After(async function(){
    //    await browser.pause(2000);

if(browser){
await browser.close()
}


})