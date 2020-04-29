$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/uk/co/expedia/resources/featurefile/flightsearch.feature");
formatter.feature({
  "line": 2,
  "name": "Flight Search Feature",
  "description": "As a user, I want to find search flights between cities",
  "id": "flight-search-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Flights"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Verify That User is Able to Search Same Destination Flights",
  "description": "",
  "id": "flight-search-feature;verify-that-user-is-able-to-search-same-destination-flights",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Flights Tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter origin city \"\u003cflyingfrom\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter destination city \"\u003cflyingTo\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter outbound date of travel \"\u003cflyoutDate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter return travel date \"\u003creturnDate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I add no travellers",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I must see flights to the same destination \"\u003cdestinationCity\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "flight-search-feature;verify-that-user-is-able-to-search-same-destination-flights;",
  "rows": [
    {
      "cells": [
        "flyingfrom",
        "flyingTo",
        "flyoutDate",
        "returnDate",
        "destinationCity"
      ],
      "line": 17,
      "id": "flight-search-feature;verify-that-user-is-able-to-search-same-destination-flights;;1"
    },
    {
      "cells": [
        "London (LHR-Heathrow)",
        "Colombo (CMB-Bandaranaike Intl.)",
        "05/05/2020",
        "12/05/2020",
        "Select your departure to Colombo (CMB-Bandaranaike Intl.)"
      ],
      "line": 18,
      "id": "flight-search-feature;verify-that-user-is-able-to-search-same-destination-flights;;2"
    },
    {
      "cells": [
        "Colombo (CMB-Bandaranaike Intl.)",
        "London (LHR-Heathrow)",
        "03/06/2020",
        "12/06/2020",
        "Select your departure to London (LHR-Heathrow)"
      ],
      "line": 19,
      "id": "flight-search-feature;verify-that-user-is-able-to-search-same-destination-flights;;3"
    },
    {
      "cells": [
        "Toronto, ON (YTZ-Billy Bishop Toronto City)",
        "London (LHR-Heathrow)",
        "02/09/2020",
        "22/09/2020",
        "Select your departure to London (LHR-Heathrow)"
      ],
      "line": 20,
      "id": "flight-search-feature;verify-that-user-is-able-to-search-same-destination-flights;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16007909800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify That User is Able to Search Same Destination Flights",
  "description": "",
  "id": "flight-search-feature;verify-that-user-is-able-to-search-same-destination-flights;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Flights"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Flights Tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter origin city \"London (LHR-Heathrow)\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter destination city \"Colombo (CMB-Bandaranaike Intl.)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter outbound date of travel \"05/05/2020\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter return travel date \"12/05/2020\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I add no travellers",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I must see flights to the same destination \"Select your departure to Colombo (CMB-Bandaranaike Intl.)\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 115877100,
  "status": "passed"
});
formatter.match({
  "location": "FlightsearchStepdefs.iClickOnFlightsTab()"
});
formatter.result({
  "duration": 597513300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London (LHR-Heathrow)",
      "offset": 21
    }
  ],
  "location": "FlightsearchStepdefs.iEnterOriginCity(String)"
});
formatter.result({
  "duration": 963371100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Colombo (CMB-Bandaranaike Intl.)",
      "offset": 26
    }
  ],
  "location": "FlightsearchStepdefs.iEnterDestinationCity(String)"
});
formatter.result({
  "duration": 1132696800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05/05/2020",
      "offset": 33
    }
  ],
  "location": "FlightsearchStepdefs.iEnterOutboundDateOfTravel(String)"
});
formatter.result({
  "duration": 460027600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12/05/2020",
      "offset": 28
    }
  ],
  "location": "FlightsearchStepdefs.iEnterReturnTravelDate(String)"
});
formatter.result({
  "duration": 707768600,
  "status": "passed"
});
formatter.match({
  "location": "FlightsearchStepdefs.iAddNoTravellers()"
});
formatter.result({
  "duration": 60758108100,
  "status": "passed"
});
formatter.match({
  "location": "FlightsearchStepdefs.iClickOnSearchButton()"
});
formatter.result({
  "duration": 37387663900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select your departure to Colombo (CMB-Bandaranaike Intl.)",
      "offset": 44
    }
  ],
  "location": "FlightsearchStepdefs.iMustSeeFlightsToTheSameDestination(String)"
});
formatter.result({
  "duration": 241696600,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...departure to Colombo[]\u003e but was:\u003c...departure to Colombo[ (CMB-Bandaranaike Intl.)]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat uk.co.expedia.cucumber.stepdefs.FlightsearchStepdefs.iMustSeeFlightsToTheSameDestination(FlightsearchStepdefs.java:58)\r\n\tat ✽.Then I must see flights to the same destination \"Select your departure to Colombo (CMB-Bandaranaike Intl.)\"(src/test/java/uk/co/expedia/resources/featurefile/flightsearch.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1971686300,
  "status": "passed"
});
formatter.before({
  "duration": 14225743700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify That User is Able to Search Same Destination Flights",
  "description": "",
  "id": "flight-search-feature;verify-that-user-is-able-to-search-same-destination-flights;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Flights"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Flights Tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter origin city \"Colombo (CMB-Bandaranaike Intl.)\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter destination city \"London (LHR-Heathrow)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter outbound date of travel \"03/06/2020\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter return travel date \"12/06/2020\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I add no travellers",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I must see flights to the same destination \"Select your departure to London (LHR-Heathrow)\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 9546400,
  "status": "passed"
});
formatter.match({
  "location": "FlightsearchStepdefs.iClickOnFlightsTab()"
});
formatter.result({
  "duration": 585670600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Colombo (CMB-Bandaranaike Intl.)",
      "offset": 21
    }
  ],
  "location": "FlightsearchStepdefs.iEnterOriginCity(String)"
});
formatter.result({
  "duration": 1460381600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London (LHR-Heathrow)",
      "offset": 26
    }
  ],
  "location": "FlightsearchStepdefs.iEnterDestinationCity(String)"
});
formatter.result({
  "duration": 959854700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "03/06/2020",
      "offset": 33
    }
  ],
  "location": "FlightsearchStepdefs.iEnterOutboundDateOfTravel(String)"
});
formatter.result({
  "duration": 582854300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12/06/2020",
      "offset": 28
    }
  ],
  "location": "FlightsearchStepdefs.iEnterReturnTravelDate(String)"
});
formatter.result({
  "duration": 637386500,
  "status": "passed"
});
formatter.match({
  "location": "FlightsearchStepdefs.iAddNoTravellers()"
});
formatter.result({
  "duration": 60615095700,
  "status": "passed"
});
formatter.match({
  "location": "FlightsearchStepdefs.iClickOnSearchButton()"
});
formatter.result({
  "duration": 70576855200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select your departure to London (LHR-Heathrow)",
      "offset": 44
    }
  ],
  "location": "FlightsearchStepdefs.iMustSeeFlightsToTheSameDestination(String)"
});
formatter.result({
  "duration": 144499000,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c... departure to London[]\u003e but was:\u003c... departure to London[ (LHR-Heathrow)]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat uk.co.expedia.cucumber.stepdefs.FlightsearchStepdefs.iMustSeeFlightsToTheSameDestination(FlightsearchStepdefs.java:58)\r\n\tat ✽.Then I must see flights to the same destination \"Select your departure to London (LHR-Heathrow)\"(src/test/java/uk/co/expedia/resources/featurefile/flightsearch.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1513253300,
  "status": "passed"
});
formatter.before({
  "duration": 16369241800,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify That User is Able to Search Same Destination Flights",
  "description": "",
  "id": "flight-search-feature;verify-that-user-is-able-to-search-same-destination-flights;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Flights"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Flights Tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter origin city \"Toronto, ON (YTZ-Billy Bishop Toronto City)\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter destination city \"London (LHR-Heathrow)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter outbound date of travel \"02/09/2020\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter return travel date \"22/09/2020\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I add no travellers",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I must see flights to the same destination \"Select your departure to London (LHR-Heathrow)\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 6336400,
  "status": "passed"
});
formatter.match({
  "location": "FlightsearchStepdefs.iClickOnFlightsTab()"
});
formatter.result({
  "duration": 460335600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Toronto, ON (YTZ-Billy Bishop Toronto City)",
      "offset": 21
    }
  ],
  "location": "FlightsearchStepdefs.iEnterOriginCity(String)"
});
formatter.result({
  "duration": 1511825300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London (LHR-Heathrow)",
      "offset": 26
    }
  ],
  "location": "FlightsearchStepdefs.iEnterDestinationCity(String)"
});
formatter.result({
  "duration": 1005828600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02/09/2020",
      "offset": 33
    }
  ],
  "location": "FlightsearchStepdefs.iEnterOutboundDateOfTravel(String)"
});
formatter.result({
  "duration": 604352400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22/09/2020",
      "offset": 28
    }
  ],
  "location": "FlightsearchStepdefs.iEnterReturnTravelDate(String)"
});
formatter.result({
  "duration": 1050981100,
  "status": "passed"
});
formatter.match({
  "location": "FlightsearchStepdefs.iAddNoTravellers()"
});
formatter.result({
  "duration": 60700322700,
  "status": "passed"
});
formatter.match({
  "location": "FlightsearchStepdefs.iClickOnSearchButton()"
});
formatter.result({
  "duration": 41756963000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select your departure to London (LHR-Heathrow)",
      "offset": 44
    }
  ],
  "location": "FlightsearchStepdefs.iMustSeeFlightsToTheSameDestination(String)"
});
formatter.result({
  "duration": 456006000,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c... departure to London[]\u003e but was:\u003c... departure to London[ (LHR-Heathrow)]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat uk.co.expedia.cucumber.stepdefs.FlightsearchStepdefs.iMustSeeFlightsToTheSameDestination(FlightsearchStepdefs.java:58)\r\n\tat ✽.Then I must see flights to the same destination \"Select your departure to London (LHR-Heathrow)\"(src/test/java/uk/co/expedia/resources/featurefile/flightsearch.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1738706600,
  "status": "passed"
});
formatter.before({
  "duration": 16610029200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify That User is NOT Able to Search Wrong Destination Flights",
  "description": "",
  "id": "flight-search-feature;verify-that-user-is-not-able-to-search-wrong-destination-flights",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I click on Flights Tab",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I enter origin city \"London (LHR-Heathrow)\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter destination city \"Jaffna Internatinal Airport\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter outbound date of travel \"06/11/2020\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter return travel date \"21/11/2020\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I add no travellers",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I must get No flights message between the cities",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 7111100,
  "status": "passed"
});
formatter.match({
  "location": "FlightsearchStepdefs.iClickOnFlightsTab()"
});
formatter.result({
  "duration": 419740300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London (LHR-Heathrow)",
      "offset": 21
    }
  ],
  "location": "FlightsearchStepdefs.iEnterOriginCity(String)"
});
formatter.result({
  "duration": 1103800500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jaffna Internatinal Airport",
      "offset": 26
    }
  ],
  "location": "FlightsearchStepdefs.iEnterDestinationCity(String)"
});
formatter.result({
  "duration": 1109140500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "06/11/2020",
      "offset": 33
    }
  ],
  "location": "FlightsearchStepdefs.iEnterOutboundDateOfTravel(String)"
});
formatter.result({
  "duration": 672860500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21/11/2020",
      "offset": 28
    }
  ],
  "location": "FlightsearchStepdefs.iEnterReturnTravelDate(String)"
});
formatter.result({
  "duration": 878527400,
  "status": "passed"
});
formatter.match({
  "location": "FlightsearchStepdefs.iAddNoTravellers()"
});
formatter.result({
  "duration": 60615662700,
  "status": "passed"
});
formatter.match({
  "location": "FlightsearchStepdefs.iClickOnSearchButton()"
});
formatter.result({
  "duration": 40899344200,
  "status": "passed"
});
formatter.match({
  "location": "FlightsearchStepdefs.iMustGetNoFlightsMessageBetweenTheCities()"
});
formatter.result({
  "duration": 90181491100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[contains(text(),\u0027Important: This destination may have COVID-19 trav\u0027)]\"}\n  (Session info: chrome\u003d81.0.4044.129)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-O8EH5PF\u0027, ip: \u0027192.168.0.15\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\rakul\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 4f0b648d051e7e13b9cd4ffc17b5c171\n*** Element info: {Using\u003dxpath, value\u003d//div[contains(text(),\u0027Important: This destination may have COVID-19 trav\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat uk.co.expedia.utility.Utility.getTextFromElement(Utility.java:50)\r\n\tat uk.co.expedia.pages.FlightsResultPage.getErrorMessage(FlightsResultPage.java:33)\r\n\tat uk.co.expedia.cucumber.stepdefs.FlightsearchStepdefs.iMustGetNoFlightsMessageBetweenTheCities(FlightsearchStepdefs.java:63)\r\n\tat ✽.Then I must get No flights message between the cities(src/test/java/uk/co/expedia/resources/featurefile/flightsearch.feature:32)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1386200400,
  "status": "passed"
});
formatter.uri("src/test/java/uk/co/expedia/resources/featurefile/login.feature");
formatter.feature({
  "line": 3,
  "name": "Login feature",
  "description": "\r\nAs a user, I want to login in to expedia.co.uk successfully",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 18829662000,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-feature;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I clickOnAccountTab",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I clickOnSignInTab",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter valid Email \"lameethev2@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter valid password \"lamee@1988\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 9721200,
  "status": "passed"
});
formatter.match({
  "location": "loginStepdefs.iClickOnAccountTab()"
});
formatter.result({
  "duration": 467394700,
  "status": "passed"
});
formatter.match({
  "location": "loginStepdefs.iClickOnSignInTab()"
});
formatter.result({
  "duration": 364314100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lameethev2@gmail.com",
      "offset": 21
    }
  ],
  "location": "loginStepdefs.iEnterValidEmail(String)"
});
formatter.result({
  "duration": 2898255100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lamee@1988",
      "offset": 24
    }
  ],
  "location": "loginStepdefs.iEnterValidPassword(String)"
});
formatter.result({
  "duration": 7860920400,
  "status": "passed"
});
formatter.match({
  "location": "loginStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 186619200,
  "status": "passed"
});
formatter.match({
  "location": "loginStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 267796700,
  "status": "passed"
});
formatter.after({
  "duration": 2468562300,
  "status": "passed"
});
formatter.before({
  "duration": 14573603900,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should Not login successfully with invalid credentials",
  "description": "",
  "id": "login-feature;user-should-not-login-successfully-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I clickOnAccountTab",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I clickOnSignInTab",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter valid Email \"lameethev@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter valid password \"lamee123\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should Not login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 4996100,
  "status": "passed"
});
formatter.match({
  "location": "loginStepdefs.iClickOnAccountTab()"
});
formatter.result({
  "duration": 336842200,
  "status": "passed"
});
formatter.match({
  "location": "loginStepdefs.iClickOnSignInTab()"
});
formatter.result({
  "duration": 5129895300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lameethev@gmail.com",
      "offset": 21
    }
  ],
  "location": "loginStepdefs.iEnterValidEmail(String)"
});
formatter.result({
  "duration": 30060772900,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d81.0.4044.129)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-O8EH5PF\u0027, ip: \u0027192.168.0.15\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\rakul\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50400}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 55da6601e107327f64e8eb864c998b0a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.GeneratedMethodAccessor19.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat uk.co.expedia.utility.Utility.clickOnElement(Utility.java:39)\r\n\tat uk.co.expedia.pages.SignInPage.enterEmailId(SignInPage.java:39)\r\n\tat uk.co.expedia.cucumber.stepdefs.loginStepdefs.iEnterValidEmail(loginStepdefs.java:33)\r\n\tat ✽.And I enter valid Email \"lameethev@gmail.com\"(src/test/java/uk/co/expedia/resources/featurefile/login.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "lamee123",
      "offset": 24
    }
  ],
  "location": "loginStepdefs.iEnterValidPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginStepdefs.iShouldNotLoginSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1439142100,
  "status": "passed"
});
});