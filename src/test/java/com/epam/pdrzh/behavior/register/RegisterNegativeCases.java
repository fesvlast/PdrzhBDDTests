package com.epam.pdrzh.behavior.register;

import com.epam.pdrzh.pages.LoginPage;
import com.epam.pdrzh.pages.RegisterPage;
import com.epam.pdrzh.utils.WebDriverManager;
import cucumber.api.java.en.*;

import static org.junit.Assert.assertTrue;

/**
 * Created by Tymofii_Vlasov on 10/30/2014.
 */
public class RegisterNegativeCases {

    private LoginPage loginPage;
    private RegisterPage registerPage;

    @Given("^user stay on the register page$")
    public void userStayOnRegisterPage() throws Throwable {
        loginPage =new LoginPage(WebDriverManager.getInstance());
        loginPage.navigateToWebApp();
        registerPage= loginPage.clickOnRegisterNewUserLink();
    }

    @When("^user input wrong data: (.*) and (.*), (.*), (.*), (.*), (.*)$")
    public void userInputNegativeData(String login, String pass, String confPass, String phone, String email,
                                      String checkBox){
        registerPage.fillFormWithData(login, pass, confPass, phone, email, checkBox);

    }

    @Then("^user should see error messages on register page: (.*)$")
    public void userShouldSeeErrorMessage(String error) throws Throwable {
        assertTrue(registerPage.checkErrorPresent(error));
    }
}
