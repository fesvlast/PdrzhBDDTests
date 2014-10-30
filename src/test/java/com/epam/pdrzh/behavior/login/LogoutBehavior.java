package com.epam.pdrzh.behavior.login;

import com.epam.pdrzh.pages.HomePage;
import com.epam.pdrzh.pages.LoginPage;
import com.epam.pdrzh.utils.WebDriverManager;
import cucumber.api.java.en.*;
import junit.framework.TestCase;

import static org.junit.Assert.*;

/**
 * Created by Tim on 30.10.2014.
 */
public class LogoutBehavior {

    private HomePage homePage;
    private LoginPage loginPage;

    @Given("^passenger is on his home page$")
    public void passenger_is_on_his_home_page() throws Throwable {
        homePage=new HomePage(WebDriverManager.getInstance());
        assertTrue(homePage.checkLogoutBtnPresent());
    }

    @When("^he press button logout$")
    public void he_press_button_logout() throws Throwable {
        loginPage=homePage.pressLogoutBtn();
    }

    @Then("^passenger should see login page$")
    public void passenger_should_see_login_page() throws Throwable {
        assertTrue(loginPage.isLoginBtnPressent());
    }

}
