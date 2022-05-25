import {Builder, By, Capabilities, until, WebDriver, WebElement} from "selenium-webdriver";
const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

export class employeeManagerPO {
    driver: WebDriver; 
    url: string = 'https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html'
    header: By = By.css('.titleText')
    addEmployee: By = By.css('[name="addEmployee"]')
    newEmployee: By = By.css('[name="employee11"]')
    nameField: By = By.css('[name="nameEntry"]') 
    phoneField: By = By.css('[name="phoneEntry"]')
    titleField: By = By.css('[name="titleEntry"]')
    saveBtn: By =By.css('[id="saveBtn"]') //#saveBtn

    
    constructor(driver: WebDriver, url: string) {
        this.driver = driver 
        this.url = url 
    }
    async navigate() {
        await this.driver.get(this.url)
        await this.driver.wait(until.elementLocated(this.header))
    }
    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy))
        return (await this.driver.findElement(elementBy)).click()
    }
     async sendKeys(elementBy: By, keys) {
       await this.driver.wait(until.elementLocated(elementBy))
       return this.driver.findElement(elementBy).sendKeys(keys)
   }
   async getText(elementBy) {
     await this.driver.wait(until.elementLocated(elementBy))
     return this.driver.findElement(elementBy).getText()
   }
   async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy))
        let element = await this.driver.findElement(elementBy)
        await this.driver.wait(until.elementIsVisible(element))
        return element
    }
    async setInput(elementBy: By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy)
        await input.clear()
        return input.sendKeys(keys);
    }
    async getResults() {
        return this.getText(this.newEmployee)
    }
}
