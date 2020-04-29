package uk.co.expedia.cucumber.stepdefs;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import uk.co.expedia.basepage.BasePage;
import uk.co.expedia.pages.FlightsPage;
import uk.co.expedia.pages.FlightsResultPage;
import uk.co.expedia.pages.HomePage;

/* Created
 * by Lamee */
public class FlightsearchStepdefs extends BasePage {
    @When("^I click on Flights Tab$")
    public void iClickOnFlightsTab() {
        new HomePage().clickOnAcceptTab();
        new HomePage().clickOnFlightsTab();
    }

    @And("^I enter origin city \"([^\"]*)\"$")
    public void iEnterOriginCity(String origin)  {
        new FlightsPage().enterOriginCity(origin);
    }

    @And("^I enter destination city \"([^\"]*)\"$")
    public void iEnterDestinationCity(String destination)  {
        new FlightsPage().enterDestinationCity(destination);

    }

    @And("^I enter outbound date of travel \"([^\"]*)\"$")
    public void iEnterOutboundDateOfTravel(String outdate)  {
        new FlightsPage().enterOutboundDateOfTravel(outdate);

    }

    @And("^I enter return travel date \"([^\"]*)\"$")
    public void iEnterReturnTravelDate(String returndate)  {
        new FlightsPage().enterReturnDateOfTravel(returndate);

    }

    @And("^I add no travellers$")
    public void iAddNoTravellers() {
        new FlightsPage().clickOnTravellers();
        new FlightsPage().addTwoAdultTravellersAndClose();
    }

    @And("^I click on search button$")
    public void iClickOnSearchButton() {
        new FlightsPage().clickOnSearchButton();
    }

    @Then("^I must see flights to the same destination \"([^\"]*)\"$")
    public void iMustSeeFlightsToTheSameDestination(String destinationCity)  {
        Assert.assertEquals(new FlightsResultPage().getSameDestinationTextMessage(),destinationCity);
    }

    @Then("^I must get No flights message between the cities$")
    public void iMustGetNoFlightsMessageBetweenTheCities() {
        Assert.assertTrue(new FlightsResultPage().getErrorMessage().contains("Important: This destination may have COVID-19 travel restrictions in place, including specific restrictions for lodging. Check any national, local and health advisories for this destination before you book."));
    }
}
