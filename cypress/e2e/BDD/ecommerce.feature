Feature: End to End ecommerce Validation

    
    Scenario: Ecommerce product delivery
    Given I open ecommerce page
    When I add items to Cart
    And Validate the totol amount
    Then select the country, submit and verify the success message

    Scenario: Filling the form to shop
    Given I open ecommerce page
    When I fill the form details
        |name | gender|
        |Bobs | Male|
    Then Validate the form behaviour
    And Select the shop page