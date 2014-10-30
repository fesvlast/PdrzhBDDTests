package com.epam.pdrzh.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

/**
 * Created by Tim on 26.10.2014.
 */
public class LoginPage extends BasePage {

    @FindBy(id = "inputUsername")
    @CacheLookup
    private WebElement userNameField;
    @FindBy(how = How.ID, using = "inputPassw")
    @CacheLookup
    private WebElement userPassField;
    @FindBy(how = How.NAME, using = "submit")
    @CacheLookup
    private WebElement loginBtn;
    @FindBy(xpath = "//div[2]/div[1]/p/a")
    private WebElement registerLink;

    public LoginPage(WebDriver driver) {
        super(driver);
        PageFactory.initElements(driver, this);
    }

    public void fillForm(String userName, String pass) {
        userNameField.sendKeys(userName);
        userPassField.sendKeys(pass);
    }

    public HomePage clickSignButton() {
        loginBtn.click();
        return PageFactory.initElements(driver, HomePage.class);
    }

    public boolean confirmErrorMessages(String error) {
        if( driver.getPageSource().contains(error))
            return true;
        return false;
    }

    public boolean isLoginBtnPressent(){
        return loginBtn.isDisplayed();
    }

    public boolean isRegisterNewUserLinkPresent() {
            return registerLink.isDisplayed();
    }

    public RegisterPage clickOnRegisterNewUserLink() {
        registerLink.click();
        return new RegisterPage(driver);
    }
}
