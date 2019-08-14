//POM References
import {
  MAIN_URL,
  findByIdAndClick,
  loginToFrontEnd
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
  });
  
  afterEach(async () => {
    await driver.sleep(1000);
    driver && driver.quit();
  });

  it("Clicking the Logo takes you to homepage", async () => {
    findByIdAndClick("siteLogo", driver)
    await driver.sleep(1000);
    driver.getCurrentUrl().then(url => {
      assert.strictEqual(url, "http://localhost:3001/#/home");
    })
  });

  it("Clicking the Home button takes you to homepage", async () => {
    findByIdAndClick("homeButton", driver)
    await driver.sleep(1000);
    driver.getCurrentUrl().then(url => {
      assert.strictEqual(url, "http://localhost:3001/#/home");
    })
  });

  it("Clicking the Technologies button takes you to technologies page", async () => {
    findByIdAndClick("technologiesButton", driver)
    await driver.sleep(1000);
    driver.getCurrentUrl().then(url => {
      assert.strictEqual(url, "http://localhost:3001/#/customertech");
    })
  });

  it("Clicking the Courses button takes you to courses page", async () => {
    findByIdAndClick("coursesButton", driver)
    await driver.sleep(1000);
    driver.getCurrentUrl().then(url => {
      assert.strictEqual(url, "http://localhost:3001/#/courserecs");
    })
  });

  it("Clicking the Quiz button takes you to quiz page", async () => {
    findByIdAndClick("quizButton", driver)
    await driver.sleep(1000);
    driver.getCurrentUrl().then(url => {
      assert.strictEqual(url, "http://localhost:3001/#/quiz");
    })
  });

  it("The username matches the logged in user", async () => {
    let att = await driver.findElement(By.id("loggedInAs")).getText();
    assert.strictEqual(att, "B");
  });

  it("Click on Account Button > Profile", async () => {
    findByIdAndClick("accountButton", driver);
    await driver.sleep(2000);
    findByIdAndClick("profileLink", driver);
    await driver.sleep(1000);
    driver.getCurrentUrl().then(url => {
      assert.strictEqual(url, "http://localhost:3001/#/mydetails");
    });
  });

  it("Click on Account Button > Skills", async () => {
    findByIdAndClick("accountButton", driver);
    await driver.sleep(2000);
    findByIdAndClick("skillsLink", driver);
    await driver.sleep(1000);
    driver.getCurrentUrl().then(url => {
      assert.strictEqual(url, "http://localhost:3001/#/myskills");
    });
  });

  it("Click on Account Button > Logout", async () => {
    findByIdAndClick("accountButton", driver);
    await driver.sleep(2000);
    findByIdAndClick("logoutLink", driver);
    await driver.sleep(1000);
    driver.getCurrentUrl().then(url => {
      assert.strictEqual(url, "http://localhost:3001/#/");
    });
  });
});
