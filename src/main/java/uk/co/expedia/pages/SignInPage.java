package uk.co.expedia.pages;

import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import uk.co.expedia.utility.Utility;

/* Created
 * by Lamee */
public class SignInPage extends Utility {

    private static final Logger log = LogManager.getLogger(SignInPage.class.getName());



    @FindBy(id = "gss-signin-email")
    WebElement _emailField;

    @FindBy(id = "gss-signin-password")
    WebElement _passwordField;

    @FindBy(id = "gss-signin-submit")
    WebElement _signInSumbitBtn;

    @FindBy (xpath="//span[@class='sp-name']")
    WebElement _myList;

    @FindBy (xpath="//button[@id='header-account-menu-signed-in']")
    WebElement _helloMessage;


    @FindBy(id = "gss-signin-incorrect-email-or-password")
    WebElement _errorMessage;

    public void enterEmailId(String email) {
        Reporter.addStepLog("Entering Email Id : " + email + " " + _emailField.toString() + "<br>");
        clickOnElement(_emailField);
        sendTextToElement(_emailField, email);
        log.info("Entering Email Id : " + email + " " + _emailField.toString());
    }

    public void enterPassword(String password) {
        Reporter.addStepLog("Entering Password  : " + password + " " + _passwordField.toString() + "<br>");
        clickOnElement(_passwordField);
        sendTextToElement(_passwordField, password);
        log.info("Entering Password  : " + password + " " + _passwordField.toString());
    }

    public void clickonSignInButton() {
        Reporter.addStepLog("Clicking on Sign In Button  : " + _signInSumbitBtn.toString() + "<br>");
        clickOnElement(_signInSumbitBtn);
        log.info("Clicking on Sign In Button  : " + _signInSumbitBtn.toString());
    }

    public String getMyListMessage() {
        Reporter.addStepLog("Verify My List Tab Message  : " + getTextFromElement(_myList) + " " + _myList.toString() + "<br>");
        log.info("Verify My List Tab Message  : " + getTextFromElement(_myList) + " " + _myList.toString());
        verifyThatTextIsDisplayed(_myList, "My Lists");
        return getTextFromElement(_myList);
    }

    public String getHelloMesage() {
        Reporter.addStepLog("Verify Hello Message  : " + getTextFromElement(_helloMessage) + " " + _helloMessage.toString() + "<br>");
        log.info("Verify Hello Message  : " + getTextFromElement(_helloMessage) + " " + _helloMessage.toString());
                return getTextFromElement(_helloMessage);
    }

    public String getErrorMessage() {
        Reporter.addStepLog("Verify Error Message  : " + getTextFromElement(_errorMessage)+" "+_errorMessage.toString() + "<br>");
        log.info("Verify Error Message  : " + getTextFromElement(_errorMessage)+" "+_errorMessage.toString());
        verifyThatTextIsDisplayed(_errorMessage, "You may have entered an unknown email address or an incorrect password.");
        return getTextFromElement(_errorMessage);
    }
}
