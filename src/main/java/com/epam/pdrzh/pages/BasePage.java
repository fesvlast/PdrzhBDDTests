package com.epam.pdrzh.pages;

import com.epam.pdrzh.utils.ConfigurationManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

/**
 * Created by Tim on 26.10.2014.
 */
public class BasePage {
    private static final String SITE_URL = ConfigurationManager.getInstance()
            .getProperty(ConfigurationManager.SITE_FOR_TEST_URL);

    protected WebDriver driver;

    public BasePage(WebDriver driver){
        this.driver=driver;
    }

    public LoginPage navigateToWebApp(){
        driver.get(SITE_URL);
        return PageFactory.initElements(driver, LoginPage.class);
    }
}
