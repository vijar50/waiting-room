//POM References
import {
  MAIN_URL,
  INIT_LOGIN,
  USERNAME,
  PASSWORD,
  FINAL_LOGIN,
  HOME_LOGO,
  enterUsername,
  enterPassword,
  findByIdAndClick,
  findByIdAndCheckAttribute,
  waitUntilElementLocatedById,
  enterAndClearPassword,
  enterAndClearUsername,
  findByIDAndGetText
} from "./login.pom";
// Import requirement packages
require("chromedriver");
require("geckodriver");
const assert = require("assert");
const { Builder, Key, By, until } = require("selenium-webdriver");
jest.setTimeout(30000);

describe("Login Tests", function() {
  //setup on each test
  let driver;
  beforeEach(async function() {
    driver = await new Builder().forBrowser("firefox").build();
    await driver.get(MAIN_URL);
    findByIdAndClick("initLogin", driver);
    await driver.sleep(1000);
  });
  // close the browser after running each test
  afterEach(async () => {
    await driver.sleep(1000);
    driver && driver.quit();
  });

  it("should log in successfully with given credentials", async () => {
    enterUsername("b", driver);
    enterPassword("a", driver);
    findByIdAndClick("loginToSite", driver);
    waitUntilElementLocatedById("siteLogo", driver);
    await driver.sleep(2000);
    let username = await driver.findElement(By.id("loggedInAs")).getText();
    assert.strictEqual(username, "B");
  });

  it("should navigate back from cancel", async () => {
    findByIdAndClick("cancel", driver);
    await driver.sleep(2000);
    waitUntilElementLocatedById("initLogin", driver);
  });

  it("should not let you login without a password", async () => {
    enterUsername("b", driver);
    // findByIdAndCheckAttribute("loginToSite", "aria-disabled", driver)
    // let att = findByIdAndCheckAttribute("loginToSite", "area-disabled", driver)
    let att = await driver
      .findElement(By.id("loginToSite"))
      .getAttribute("aria-disabled");
    assert.strictEqual(att, "true");
  });

  it("should not let you login without a username", async () => {
    enterPassword("a", driver);
    // findByIdAndCheckAttribute("loginToSite", "aria-disabled", driver)
    // let att = findByIdAndCheckAttribute("loginToSite", "area-disabled", driver)
    let att = await driver
      .findElement(By.id("loginToSite"))
      .getAttribute("aria-disabled");
    assert.strictEqual(att, "true");
  });

  it("should display the helper text when password is cleared", async () => {
    enterAndClearPassword("a", driver);
    await driver.sleep(1000);
    let att = await driver.findElement(By.id("password-helper-text")).getText();
    // let att = findByIDAndGetText("password-helper-text", driver)
    assert.strictEqual(att, "Please enter a password");
    await driver.sleep(1000);
  });

  it("should display the helper text when username is cleared", async () => {
    enterAndClearUsername("b", driver);
    await driver.sleep(1000);
    let att = await driver.findElement(By.id("username-helper-text")).getText();
    assert.strictEqual(att, "Please enter a user name");
    await driver.sleep(1000);
  });

});
