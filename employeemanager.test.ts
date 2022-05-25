import { employeeManagerPO } from "./employeemanagerPageObject"
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";

const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

const emPage = new employeeManagerPO(driver, "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html");

test("it works", async () => {
  await emPage.navigate();
  await driver.findElement(emPage.addEmployee).click()
  await emPage.click(emPage.addEmployee)
  await emPage.click(emPage.newEmployee)
  await emPage.click(emPage.nameField)
  await driver.findElement(emPage.nameField).clear()
  await emPage.sendKeys(emPage.nameField, "Bob the builder")
  await emPage.click(emPage.saveBtn)
  expect(await emPage.getResults()).toContain("Bob the builder");
});

afterAll(async () => {
  await driver.quit();
});