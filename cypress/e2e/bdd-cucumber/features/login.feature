Feature: Login

Scenario: Correct login
  Given I am in the main page
  When I click on the login button
  And I type the correct email and password
  Then I should see the user button

Scenario: Wrong login
  Given I am in the main page
  When I click on the login button
  And I type incorrect credentials
  Then I should see the error message
