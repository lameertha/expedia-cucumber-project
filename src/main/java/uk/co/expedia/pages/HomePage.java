package uk.co.expedia.pages;

import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import uk.co.expedia.utility.Utility;

/* Created
 * by Lamee */
public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());


    @FindBy(xpath = "//span[@class='button-text']")
    WebElement _acceptBtn;

    @FindBy(xpath = "//button[@id='header-account-menu']")
    WebElement _accountMenuTab;

    @FindBy(xpath = "//button[@id='header-account-signin-button']")
    WebElement _signInBtn;

    @FindBy(xpath = "//span[contains(text(),'Flights')]")
    WebElement _flightsTab;


    public void clickOnAcceptTab() {
        Reporter.addStepLog("Clicking on Accept Tab : " + _acceptBtn.toString() + "<br>");
        clickOnElement(_acceptBtn);
        log.info("Clicking on Accept Tab : " + _acceptBtn.toString());
    }

    public void clickonAccountTab() {
        Reporter.addStepLog("Clicking on Account Tab : " + _accountMenuTab.toString() + "<br>");
        clickOnElement(_accountMenuTab);
        log.info("Clicking on Account Tab : " + _accountMenuTab.toString());
    }

    public void clickOnSignInTab() {
        Reporter.addStepLog("Clicking on Sign In Tab : " + _signInBtn.toString() + "<br>");
        clickOnElement(_signInBtn);
        log.info("Clicking on Sign In Tab : " + _signInBtn.toString());
    }

    public void clickOnFlightsTab() {
        Reporter.addStepLog("Clicking on Flights Tab : " + _flightsTab.toString() + "<br>");
        clickOnElement(_flightsTab);
        log.info("Clicking on Flights Tab : " + _flightsTab.toString());
    }
}
