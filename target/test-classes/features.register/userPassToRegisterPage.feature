Feature: Register functionality
@PassToRegisterPage
  Scenario: User wants to be on the register page.
    Given As a user I stay on the login page
    When User click on the link "Register a new user"
    Then He gets a register page