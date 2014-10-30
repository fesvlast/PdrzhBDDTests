Feature: Login functionality

  @LoginPositive
  Scenario: As a passenger I want be able to login to the system
    Given Passenger wants to login
    When Passenger login to the system with username "fesvlast" and password "fesvlast"
    Then Passenger should see home page and his login "fesvlast"