const { Builder, By, Key, until } = require("selenium-webdriver");
const { expect } = require("chai");
const { describe } = require("mocha");

describe("Ui Testing using Selenium", function () {
  this.timeout(30000);
  let driver;

  before(async function () {
    driver = await new Builder().forBrowser("chrome").build();
  });

  after(async function () {
    await driver.quit();
  });


  it("should load the login page", async function () {
    await driver.get(
      "C:/Users/dedec/Documents/smester_5/ppmpl_praktikum/prak4/ui-testing/login.html"
    );
    const title = await driver.getTitle();
    expect(title).to.equal("Login Page");
  });


  it("should input username and password", async function () {
    await driver.findElement(By.id("username")).sendKeys("username");
    await driver.findElement(By.id("password")).sendKeys("password");
    const usernameValue = await driver
      .findElement(By.id("username"))
      .getAttribute("value");
    const passwordValue = await driver
      .findElement(By.id("password"))
      .getAttribute("value");
    expect(usernameValue).to.equal("username");
    expect(passwordValue).to.equal("password");
  });


  it("should click the login button", async function () {
    await driver.findElement(By.id("loginButton")).click();
  });

  it("should display an error message when login fails due to incorrect username or password", async function () {
    await driver.findElement(By.css("#username")).sendKeys("wrongUsername");
    await driver.findElement(By.xpath("//*[@id='password']")).sendKeys("wrongPassword");
    await driver.findElement(By.id("loginButton")).click();

    const errorMessageElement = await driver.findElement(By.id("message"));

    // memeriksa pesan error telah ditampilkan
    const isErrorMessageVisible = await errorMessageElement.isDisplayed();
    expect(isErrorMessageVisible).to.be.true;

    const errorMessageText = await errorMessageElement.getText();
    expect(errorMessageText).to.equal("Invalid username or password");
  });
});
