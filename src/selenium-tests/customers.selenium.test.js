//POM References
import {
  MAIN_URL,
  findByIdAndClick,
  loginToFrontEnd,
  findByIdAndCheckAttribute,
  openLinkInNewWindow
} from "./testhelpers";
// Import requirement packages
require("chromedriver");
// require("geckodriver");
const assert = require("assert");
const { Builder, Key, By, until } = require("selenium-webdriver");
jest.setTimeout(30000);

describe("Login Tests", function() {
  let driver;
  beforeEach(async function() {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get(MAIN_URL);
    findByIdAndClick("initLogin", driver);
    await driver.sleep(1000);
    loginToFrontEnd(driver);
    await driver.sleep(1000);
    findByIdAndClick("technologiesButton", driver);
    await driver.sleep(1000);
  });

  afterEach(async () => {
    await driver.sleep(1000);
    driver && driver.quit();
  });

  it("Check Timmy's URL is correct", async () => {
    let finding = await driver.findElement(By.id("Timmy")).getAttribute("url");
    assert.strictEqual(finding, "https://www.burjkhalifa.ae/en/");
  });

  it("Click Timmy's URL", async () => {
    openLinkInNewWindow("Timmy", driver)
    await driver.sleep(2000);
  });

  it("Check Jimmy's URL is correct", async () => {
    let finding = await driver.findElement(By.id("Jimmy")).getAttribute("url");
    assert.strictEqual(finding, "https://www.esbnyc.com/");
  });

  it("Click Jimmy's URL", async () => {
    openLinkInNewWindow("Jimmy", driver)
    await driver.sleep(2000);
  });

  it("Check Nimmy's URL is correct", async () => {
    let finding = await driver.findElement(By.id("Nimmy")).getAttribute("url");
    assert.strictEqual(finding, "https://www.willistower.com/");
  });

  it("Click Nimmy's URL", async () => {
    openLinkInNewWindow("Nimmy", driver)
    await driver.sleep(2000);
  });
});
