@Flights
Feature: Flight Search Feature
  As a user, I want to find search flights between cities

  Scenario Outline: Verify That User is Able to Search Same Destination Flights

    Given I am on Home page
    When I click on Flights Tab
    And I enter origin city "<flyingfrom>"
    And I enter destination city "<flyingTo>"
    And I enter outbound date of travel "<flyoutDate>"
    And I enter return travel date "<returnDate>"
    And I add no travellers
    And I click on search button
    Then I must see flights to the same destination "<destinationCity>"
    Examples:
      | flyingfrom                                  | flyingTo                          | flyoutDate | returnDate | destinationCity                                          |
      |London (LHR-Heathrow)                        | Colombo (CMB-Bandaranaike Intl.)  | 05/05/2020 | 12/05/2020 | Select your departure to Colombo |
      |Colombo (CMB-Bandaranaike Intl.)              |London (LHR-Heathrow)             | 03/06/2020 | 12/06/2020 | Select your departure to London  |
      | Toronto, ON (YTZ-Billy Bishop Toronto City)  | London (LHR-Heathrow)            | 02/09/2020 | 22/09/2020 | Select your departure to London   |

  Scenario: Verify That User is NOT Able to Search Wrong Destination Flights

    Given I am on Home page
    When I click on Flights Tab
    And I enter origin city "London (LHR-Heathrow)"
    And I enter destination city "Jaffna Internatinal Airport"
    And I enter outbound date of travel "06/11/2020"
    And I enter return travel date "21/11/2020"
    And I add no travellers
    And I click on search button
    Then I must get No flights message between the cities