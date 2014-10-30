Feature: Check that a passenger can logout from his account
  @Logout
  Scenario: Passenger wants to logout from his account.
    Given passenger is on his home page
    When he press button logout
    Then passenger should see login page

