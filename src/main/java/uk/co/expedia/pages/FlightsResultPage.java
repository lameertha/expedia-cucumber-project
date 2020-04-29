package uk.co.expedia.pages;

import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import uk.co.expedia.utility.Utility;

/* Created
 * by Lamee */
public class FlightsResultPage extends Utility {

    private static final Logger log = LogManager.getLogger(FlightsResultPage.class.getName());



    @FindBy(xpath = "//span[@class='title-city-text']")
    WebElement _getSameDestinationText;

    @FindBy(xpath="//div[contains(text(),'Important: This destination may have COVID-19 trav')]")
    WebElement _errorMessage;

    public String getSameDestinationTextMessage() {
        Reporter.addStepLog("Verify Destination City Message  : " + _getSameDestinationText.toString() + "<br>");
        log.info("Verify Destination City Message  : " + _getSameDestinationText.toString());
                return getTextFromElement(_getSameDestinationText);
    }

    public String getErrorMessage() {
        Reporter.addStepLog("Verify Error Message   : " + _errorMessage.toString() + "<br>");
        log.info("Verify Error Message  : " + _errorMessage.toString());
        return getTextFromElement(_errorMessage);
    }
}
