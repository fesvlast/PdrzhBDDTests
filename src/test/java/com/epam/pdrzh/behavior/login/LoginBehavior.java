package com.epam.pdrzh.behavior.login;

import com.epam.pdrzh.pages.HomePage;
import com.epam.pdrzh.pages.LoginPage;
import com.epam.pdrzh.utils.WebDriverManager;
import cucumber.api.java.en.*;

import static org.junit.Assert.*;

/**
 * Created by Tim on 26.10.2014.
 */
public class LoginBehavior{

    private LoginPage loginPage;
    private HomePage homePage;

    @Given("^Passenger wants to login$")
    public void passengerWantsToLogin() throws Throwable {
        loginPage=new LoginPage(WebDriverManager.getInstance());
        loginPage.navigateToWebApp();
    }

    @When("^Passenger login to the system with username \"([^\"]*)\" and password \"([^\"]*)\"$")
    public void passengerLoginToTheSystemWithUsernameAndPassword(String userName, String pass) throws Throwable {
        loginPage.fillForm(userName, pass);
        homePage=loginPage.clickSignButton();
    }

    @Then("^Passenger should see home page and his login \"([^\"]*)\"$")
    public void passengerShouldSeeHomePageAndHisLogin(String login) throws Throwable {
        assertTrue(homePage.checkCorrectLogin(login));
    }

}
