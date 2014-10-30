package com.epam.pdrzh.behavior.register;

import com.epam.pdrzh.pages.LoginPage;
import com.epam.pdrzh.pages.RegisterPage;
import com.epam.pdrzh.utils.WebDriverManager;
import cucumber.api.java.en.*;

import static org.junit.Assert.*;

/**
 * Created by Tim on 30.10.2014.
 */
public class PassToRegisterPageBehavior {

    private LoginPage loginPage;
    private RegisterPage registerPage;

    @Given("^As a user I stay on the login page$")
    public void userStayOnLoginPage() throws Throwable {
        loginPage=new LoginPage(WebDriverManager.getInstance());
        loginPage.navigateToWebApp();
       assertTrue(loginPage.isRegisterNewUserLinkPresent());
    }

    @When("^User click on the link \"([^\"]*)\"$")
    public void userClickOnTheRegisterNewUserLink(String linkToPageName) throws Throwable {
        registerPage=loginPage.clickOnRegisterNewUserLink();
    }

    @Then("^He gets a register page$")
    public void heGetsTheRegisterPage() throws Throwable {
        assertTrue(registerPage.isRegisterFieldsPresent());
        registerPage.navigateToWebApp();
    }
}
