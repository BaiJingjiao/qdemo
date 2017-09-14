var wd = require('selenium-webdriver'),
    By = wd.By,
    until = wd.until;

var driver = new wd.Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://www.baidu.com');
driver.findElement(By.id('kw')).sendKeys('webdriver');
driver.findElement(By.id('su')).click();
driver.wait(until.titleIs('webdriver_百度搜索'), 1000);
driver.quit();
