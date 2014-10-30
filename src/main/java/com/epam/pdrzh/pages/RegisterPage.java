package com.epam.pdrzh.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

/**
 * Created by Tim on 30.10.2014.
 */
public class RegisterPage extends BasePage {

    @FindBy(id = "login")
    private WebElement loginField;
    @FindBy(id = "password")
    private WebElement passwordField;
    @FindBy(id = "confirmPassword")
    private WebElement confirmPasswordField;
    @FindBy(id = "phone")
    private WebElement phoneField;
    @FindBy(id = "email")
    private WebElement emailField;
    @FindBy(name = "agree")
    private WebElement agreeCheckBox;
    @FindBy(name = "submit")
    private WebElement submitBtn;


    public RegisterPage(WebDriver driver) {
        super(driver);
        PageFactory.initElements(driver, this);
    }


    public boolean isRegisterFieldsPresent() {

        if(loginField.isDisplayed() && passwordField.isDisplayed()&& confirmPasswordField.isDisplayed()
                && passwordField.isDisplayed() && emailField.isDisplayed() && agreeCheckBox.isDisplayed()){
            return true;
        }
        return false;
    }
}
