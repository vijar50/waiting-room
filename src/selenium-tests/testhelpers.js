//POM References
import { enterUsername, enterPassword } from "./login.pom";
const { Builder, Key, By, until } = require("selenium-webdriver");
const assert = require("assert");

//ELEMENTS

//url
export const MAIN_URL = "http://localhost:3001/#/";
//first login button
export const INIT_LOGIN = "MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6";
//username field
export const USERNAME = "//input[@id='username']";
//password field
export const PASSWORD = "//input[@id='password']";
//final log in button
export const FINAL_LOGIN = "loginToSite";
//home page logo
export const HOME_LOGO = "siteLogo";

//PAGE ACTIONS

export const loginToFrontEnd = async (webdriver) => {
  enterUsername("b", webdriver);
  enterPassword("a", webdriver);
  findByIdAndClick("loginToSite", webdriver);
  waitUntilElementLocatedById("siteLogo", webdriver);
  await webdriver.sleep(2000);
  let usn = await webdriver.findElement(By.id("loggedInAs")).getText();
  assert.strictEqual(usn, "B");
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

export const waitUntilElementLocatedById = async (locator, webdriver) => {
  await webdriver.wait(until.elementLocated(By.id(locator)));
};
