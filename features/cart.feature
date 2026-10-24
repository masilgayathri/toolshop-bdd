Feature: Shopping cart

  Scenario: Customer adds a product to the cart
    Given I open the home page
    When I open the product "Slip Joint Pliers"
    And I set the quantity to 2
    And I add the product to the cart
    Then I see the message "Product added to shopping cart."
    And the cart shows 2 items
