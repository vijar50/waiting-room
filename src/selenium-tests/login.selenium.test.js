// test.js
// Import requirement packages
require("chromedriver");
const assert = require("assert");
const { Builder, Key, By, until } = require("selenium-webdriver");
jest.setTimeout(30000);

describe("Login - Success/Navigation", function() {
  let driver;
  beforeEach(async function() {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/#/");
    await driver
      .findElement(By.className("MuiGrid-item-15 MuiGrid-grid-xs-6-48"))
      .click();
    await driver.sleep(2000);
  });

  it("should log in successfully", async () => {
    await driver.wait(
      until.elementLocated(By.xpath("//input[@id='username']")),
      10000
    );
    await driver
      .findElement(By.xpath("//input[@id='username']"))
      .sendKeys("bubbles", Key.RETURN);
    await driver
      .findElement(By.xpath("//input[@id='password']"))
      .sendKeys("bubbles", Key.RETURN);
    await driver.wait(
      until.elementLocated(
        By.className(
          "MuiButtonBase-root-200 MuiButton-root-174 MuiButton-contained-185 MuiButton-containedSecondary-187 MuiButton-raised-188 MuiButton-raisedSecondary-190 Login-button-7"
        )
      ),
      10000
    );
    await driver
      .findElement(
        By.className(
          "MuiButtonBase-root-200 MuiButton-root-174 MuiButton-contained-185 MuiButton-containedSecondary-187 MuiButton-raised-188 MuiButton-raisedSecondary-190 Login-button-7"
        )
      )
      .click();
    await driver.wait(until.elementLocated(By.id("foo")));
    await driver.sleep(3000);
  });

  it("should navigate back from cancel", async () => {
    await driver
      .findElement(By.xpath("//span[contains(text(),'Cancel')]"))
      .click();
    await driver.sleep(2000);
    await driver.wait(
      until.elementLocated(By.className("MuiGrid-item-15 MuiGrid-grid-xs-6-48"))
    );
  });
  // close the browser after running tests
  afterEach(() => driver && driver.quit());
});

