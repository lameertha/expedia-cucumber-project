@Login

Feature: Login feature

  As a user, I want to login in to expedia.co.uk successfully

  Scenario: User should login successfully with valid credentials
    Given I am on Home page
    When I clickOnAccountTab
    And I clickOnSignInTab
    And I enter valid Email "lameethev2@gmail.com"
    And I enter valid password "lamee@1988"
    And I click on login button
    Then I should login successfully

  Scenario: User should Not login successfully with invalid credentials
    Given I am on Home page
    When I clickOnAccountTab
    And I clickOnSignInTab
    And I enter valid Email "lameethev@gmail.com"
    And I enter valid password "lamee123"
    And I click on login button
    Then I should Not login successfully