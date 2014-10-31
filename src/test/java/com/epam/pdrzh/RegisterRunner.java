package com.epam.pdrzh;

import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by Tim on 30.10.2014.
 */

@RunWith(Cucumber.class)
@Cucumber.Options(
        features = {"src/test/resources"},
        format = {"pretty", "html:target/reports/cucumber/html"},
        tags = {"@PassToRegisterPage, @TryToRegister"}
)//@PassToRegisterPage,
public class RegisterRunner {
}
