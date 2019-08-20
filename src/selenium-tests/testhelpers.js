//Imports
const { Builder, Key, By, until } = require("selenium-webdriver");
const assert = require("assert");

//ELEMENTS

export const MAIN_URL = "http://localhost:3001/#/";
//first login button
export const INIT_LOGIN = "MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6";
export const USERNAME = "//input[@id='username']";
export const PASSWORD = "//input[@id='password']";
export const FINAL_LOGIN = "loginToSite";
export const HOME_LOGO = "siteLogo";

//PAGE ACTIONS

export const enterAndClearUsername = async (username, webdriver) => {
  await webdriver
    .findElement(By.xpath(USERNAME))
    .sendKeys(username, Key.BACK_SPACE);
};

export const enterPassword = async (password, webdriver) => {
  await webdriver
    .findElement(By.xpath(PASSWORD))
    .sendKeys(password, Key.RETURN);
};

export const enterAndClearPassword = async (password, webdriver) => {
  await webdriver
    .findElement(By.xpath(PASSWORD))
    .sendKeys(password, Key.BACK_SPACE);
};

export const enterUsername = async (username, webdriver) => {
  await webdriver
    .findElement(By.xpath(USERNAME))
    .sendKeys(username, Key.RETURN);
};

export const findByIdAndClick = async (locator, webdriver) => {
  await webdriver.findElement(By.id(locator)).click();
};

export const findByIdAndCheckAttribute = async (
  locator,
  attribute,
  webdriver
) => {
  let attr = await webdriver
    .findElement(By.id(locator))
    .getAttribute(attribute);
  return JSON.stringify(attr);
};

export const findByIDAndGetText = async (locator, webdriver) => {
  let attr = await webdriver.findElement(By.id(locator)).getText();
  return attr;
};

export const loginToFrontEnd = async webdriver => {
  enterUsername("b", webdriver);
  enterPassword("a", webdriver);
  findByIdAndClick("loginToSite", webdriver);
  waitUntilElementLocatedById("siteLogo", webdriver);
  await webdriver.sleep(2000);
  let usn = await webdriver.findElement(By.id("loggedInAs")).getText();
  assert.strictEqual(usn, "B");
};

export const waitUntilElementLocatedById = async (locator, webdriver) => {
  await webdriver.wait(until.elementLocated(By.id(locator)));
};
