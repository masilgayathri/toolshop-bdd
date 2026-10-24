Feature: Product search

  Scenario: Customer searches for a product
    Given I open the home page
    When I search for "Pliers"
    Then I see the search caption "Searched for: Pliers"
    And every product shown contains "Pliers"
