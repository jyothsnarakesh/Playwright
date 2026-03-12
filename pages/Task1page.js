class CoursePage {

constructor(page){
    this.page = page

    this.javaRadio = page.getByLabel('Java')
    this.beginnerCheck = page.getByLabel('Beginner')
    this.intermediateCheck = page.getByLabel('Intermediate')

    this.rows = page.locator('table tbody tr')
}

async openPage(){

    await this.page.goto('https://practicetestautomation.com/practice-test-table/')
}

async applyFilters(){

    await this.page.mouse.wheel(0,500)

    await this.javaRadio.check()

    await this.beginnerCheck.click()
    await this.intermediateCheck.click()

    // await this.page.mouse.wheel(500,750)
}

async printCourses(){

    const rowCount = await this.rows.count()

    for(let i=0;i<rowCount;i++){

        const row = this.rows.nth(i)

        const language = await row.locator('td').nth(2).textContent()
        const level = await row.locator('td').nth(3).textContent()

        if(language === 'Java' && level === 'Advanced'){

            const courseName = await row.locator('td').nth(1).textContent()

            console.log("Course Name:",courseName)
        }
    }
}


}

module.exports = CoursePage