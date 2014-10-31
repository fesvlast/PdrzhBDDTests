package com.epam.pdrzh.helpers;

import com.epam.pdrzh.utils.ConfigurationManager;
import com.epam.pdrzh.utils.WebDriverManager;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

/**
 * Created by Tim on 26.10.2014.
 */
public class MainHooks {

    private static boolean flagScreenShoot =Boolean.parseBoolean(ConfigurationManager.getInstance()
            .getProperty(ConfigurationManager.CREATE_SCREENSHOT));

    @Before
    public void prepare(){

    }
    @After
    public void takeScreenShot(Scenario result){
        if(flagScreenShoot){
            result.embed(getScreenShotBytes(), "image/png");
        }
    }

    private byte[] getScreenShotBytes() {
        if(WebDriverManager.getInstance() instanceof TakesScreenshot){
            return ((TakesScreenshot) WebDriverManager.getInstance())
                    .getScreenshotAs(OutputType.BYTES);
        }
        return  new byte[]{};
    }
}
