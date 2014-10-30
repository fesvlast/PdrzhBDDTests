package com.epam.pdrzh.suites;


import com.epam.pdrzh.LoginRunner;
import com.epam.pdrzh.RegisterRunner;
import com.epam.pdrzh.utils.WebDriverManager;
import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;

/**
 * Created by Tim on 29.10.2014.
 */

@RunWith(Suite.class)
@Suite.SuiteClasses({
        LoginRunner.class,
        RegisterRunner.class
                    })
public class RunTest {


    @AfterClass
    public static void tearDown(){
        WebDriverManager.getInstance().quit();
    }


}
