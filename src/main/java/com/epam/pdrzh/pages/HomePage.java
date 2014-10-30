package com.epam.pdrzh.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

/**
 * Created by Tim on 26.10.2014.
 */
public class HomePage extends BasePage {

    @FindBy(how = How.XPATH, using = "//div[1]/span")
    private WebElement loginNameText;
    @FindBy(how = How.XPATH, using = "//div[2]/ul/li[2]/a")
    private WebElement logoutBtn;

    public HomePage(WebDriver driver) {
        super(driver);
        PageFactory.initElements(driver, this);
    }

    public boolean checkCorrectLogin(String login) {
        return  loginNameText.getText().contains(login);
   }

   public boolean checkLogoutBtnPresent(){
       return logoutBtn.isDisplayed();
   }

    public LoginPage pressLogoutBtn() {
        logoutBtn.click();
        return new LoginPage(driver);
    }



}

