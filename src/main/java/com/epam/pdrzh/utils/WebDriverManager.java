package com.epam.pdrzh.utils;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import java.util.concurrent.TimeUnit;

import static com.epam.pdrzh.utils.ConfigurationManager.*;

/**
 * Created by Tim on 26.10.2014.
 */
public class WebDriverManager {

    private static WebDriver driver;
    private static final String BROWSER =ConfigurationManager.getInstance().getProperty(BROWSER_NAME);
    private static final int delay = Integer.parseInt(ConfigurationManager.getInstance()
            .getProperty(DELAY_FOR_WEBDRIVER));

    public static WebDriver getInstance(){
        if(driver==null){
            if (BROWSER.equals("FIREFOX")) {
                driver = new FirefoxDriver();

            } else if (BROWSER.equals("CHROME")) {
                driver = new ChromeDriver();

            } else if (BROWSER.equals("IE")) {
                driver = new InternetExplorerDriver();

            } else {
                driver = new FirefoxDriver();
            }
            driver.manage().timeouts().implicitlyWait(delay, TimeUnit.SECONDS);
        }
        return driver;
    }

}
