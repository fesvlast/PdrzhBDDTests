package com.epam.pdrzh;

import com.epam.pdrzh.utils.WebDriverManager;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

/**
 * Created by Tim on 26.10.2014.
 */

@RunWith(Cucumber.class)
@Cucumber.Options(
        features = {"src/test/resources"},
        format = {"pretty", "html:target/reports/cucumber/html"},
        tags = {"@LoginNegative, @LoginPositive, @Logout"}
)
public class LoginRunner {
    @BeforeClass
    public static void setUp(){
        WebDriverManager.getInstance();
    }

    @AfterClass
    public static void tearDown(){
        //WebDriverManager.getInstance().quit();
    }

}
