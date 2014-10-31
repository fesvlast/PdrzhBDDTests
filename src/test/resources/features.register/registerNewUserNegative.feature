Feature: Register functionality

  @TryToRegister
  Scenario Outline: As a new user I want to create a new  account
    Given user stay on the register page
    When user input wrong data: <login> and <password>, <confirmPassword>, <Phone>, <Email>, <agreeCheckBox>
    Then user should see error messages on register page: <errorMessage>
  Examples:
    |login|password|confirmPassword|Phone        |Email         |agreeCheckBox |errorMessage                           |
    |     |password|password       |+342343242342|user@gmail.com|selected      |Login is required                      |
    |login|        |password       |+342343242342|user@gmail.com|selected      |Password is required                   |
    |login|password|               |+342343242342|user@gmail.com|selected      |Password and confirmation are different|
    |login|password|password       |             |user@gmail.com|selected      |Phone is required                      |
    |login|password|password       |+342343242342|              |selected      |Email is required                      |
    |login|password|password       |+342343242342|user@gmail.com|selected      |Sorry, but client with this login is already in use|
    |login|password|password       |+342343242342|user@gmail.com|not_selected  |Modal dialog window                    |
    |login|12      |12             |+342343242342|user@gmail.com|selected      |Please enter at least 3 symbols        |
    |login|12      |12             | 342343242342|user@gmail.com|selected      |Please enter at least 3 symbols        |
    |login l|password|password     | 342343242342|user@gmail.com|selected      |Invalid login                          |
    | login |password|password     | 342343242342|user@gmail.com|selected      |Invalid login                          |