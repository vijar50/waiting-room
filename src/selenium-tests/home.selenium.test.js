//POM References
import { MAIN_URL, findByIdAndClick, loginToFrontEnd } from "./testhelpers";
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
  });

  afterEach(async () => {
    await driver.sleep(1000);
    driver && driver.quit();
  });

  it("takes you to the homepage", async () => {
    findByIdAndClick("siteLogo", driver);
    await driver.sleep(1000);
    driver.getCurrentUrl().then(url => {
      assert.strictEqual(url, "http://localhost:3001/#/home");
    });
  });

  it("can view available courses", async () => {
    findByIdAndClick("viewcourses", driver);
    await driver.sleep(1000);
    driver.getCurrentUrl().then(url => {
      assert.strictEqual(url, "http://localhost:3001/#/courserecs");
    });
  });

  it("can view existing bookings", async () => {
    findByIdAndClick("editbookings", driver);
    await driver.sleep(1000);
    driver.getCurrentUrl().then(url => {
      assert.strictEqual(url, "http://localhost:3001/#/mybookings");
    });
  });

  it("can view quizzes", async () => {
    findByIdAndClick("gotoquizzes", driver);
    await driver.sleep(1000);
    driver.getCurrentUrl().then(url => {
      assert.strictEqual(url, "http://localhost:3001/#/quiz");
    });
  });
});
