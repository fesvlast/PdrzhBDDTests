package com.epam.pdrzh.behavior.login;

import com.epam.pdrzh.pages.BasePage;
import com.epam.pdrzh.pages.LoginPage;
import com.epam.pdrzh.utils.WebDriverManager;
import cucumber.api.java.en.*;


import static org.junit.Assert.*;

/**
 * Created by Tim on 28.10.2014.
 */
public class LoginNegativeBehavior {
    private LoginPage loginPage;

    @Given("^Passenger has forgotten username and password$")
    public void passengerOnLoginPage() throws Throwable {
       loginPage=new BasePage(WebDriverManager.getInstance()).navigateToWebApp();
    }
    @When("^Passenger login with wrong username: (.*) and password: (.*)$")
    public void passengerTryToLogin(String login, String pass) throws Throwable {
        loginPage.fillForm(login, pass);
        loginPage.clickSignButton();
    }

    @Then("^Passenger should see error messages on login page: (.*)$")
    public void userShouldSeeErrorMessages(String errorMsg) throws Throwable {
        assertTrue(loginPage.confirmErrorMessages(errorMsg));

    }
}
