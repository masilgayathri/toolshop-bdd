Feature: Login

  Scenario: Customer logs in with valid details
    Given I am on the login page
    When I log in with email "customer@practicesoftwaretesting.com" and password "welcome01"
    Then I see the page title "My account"
    And I see "Jane Doe" in the user menu

  Scenario: Customer cannot log in with a wrong password
    Given I am on the login page
    When I log in with email "customer@practicesoftwaretesting.com" and password "wrongpass"
    Then I see the login error "Invalid email or password"
