Feature: Login functionality

  @LoginNegative
  Scenario Outline: As a passenger I have forgotten the password and trying to login to the system
    Given Passenger has forgotten username and password
    When Passenger login with wrong username: <username> and password: <password>
    Then Passenger should see error messages on login page: <errorMessage>
  Examples:
    |username   |password      |errorMessage                                |
    |fesvlast   |wrongPassword |Bad credentials                             |
    |pass       |fesvlast      |Bad credentials                             |
    |           |wrongPassword |Login is required                           |
    |w          |fesvlast      |Login is too short, enter at least 3 letters|
    |wrongLogin |              |Password is required                        |
    |wrongLogin |4             |Please enter at least 3 symbols             |