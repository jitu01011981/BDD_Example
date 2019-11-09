$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/selenium/BDD_java/src/features/gmo_dt.feature");
formatter.feature({
  "name": "Test GMO Post",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@dtfeature"
    }
  ]
});
formatter.scenario({
  "name": "Enter GMO OnLine site",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@dtfeature"
    },
    {
      "name": "@GMOHome"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on GMO home page",
  "keyword": "Given "
});
formatter.match({
  "location": "GmoSteps_so.i_am_on_GMO_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter GMO site",
  "keyword": "When "
});
formatter.match({
  "location": "GmoSteps_so.i_Enter_GMO_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Catalog page displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "GmoSteps_so.i_should_see_Catalog_page_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Order an item from the catalog displayed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@dtfeature"
    },
    {
      "name": "@Catalog"
    }
  ]
});
formatter.step({
  "name": "I am on Catalog page",
  "keyword": "Given "
});
formatter.match({
  "location": "GmoSteps_so.i_am_on_Catalog_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I order for items",
  "rows": [
    {
      "cells": [
        "3 Person Dome Tent",
        "2"
      ]
    },
    {
      "cells": [
        "External Frame Backpack",
        "3"
      ]
    },
    {
      "cells": [
        "Glacier Sun Glasses",
        "4"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "GmoSteps_so.i_order_for_items(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I place order",
  "keyword": "And "
});
formatter.match({
  "location": "GmoSteps_so.i_place_order()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should expect Place order page displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "GmoSteps_so.i_should_expect_Place_order_page_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Proceed with Order confirmation",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@dtfeature"
    },
    {
      "name": "@PlaceOrder"
    }
  ]
});
formatter.step({
  "name": "I am on Place Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "GmoSteps_so.i_am_on_Place_Order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I confirm my orders and proceed to billing",
  "keyword": "And "
});
formatter.match({
  "location": "GmoSteps_so.i_confirm_my_orders_and_proceed_to_billing()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see billing page",
  "keyword": "Then "
});
formatter.match({
  "location": "GmoSteps_so.i_should_see_billing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Provide billing address and checkout",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@dtfeature"
    },
    {
      "name": "@Billing"
    }
  ]
});
formatter.step({
  "name": "I am on Billing page",
  "keyword": "Given "
});
formatter.match({
  "location": "GmoSteps_so.i_am_on_Billing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input correct billing address",
  "keyword": "When "
});
formatter.match({
  "location": "GmoSteps_so.i_input_correct_billing_address()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checkout",
  "keyword": "And "
});
formatter.match({
  "location": "GmoSteps_so.i_checkout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be taken to receipt page",
  "keyword": "Then "
});
formatter.match({
  "location": "GmoSteps_so.i_should_be_taken_to_receipt_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "confirm receipt and return to GMO home page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@dtfeature"
    },
    {
      "name": "@Receipt"
    }
  ]
});
formatter.step({
  "name": "I am in Receipt page",
  "keyword": "Given "
});
formatter.match({
  "location": "GmoSteps_so.i_am_in_Receipt_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I opt to return to home page",
  "keyword": "When "
});
formatter.match({
  "location": "GmoSteps_so.i_opt_to_return_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be navigated to GMO home page",
  "keyword": "Then "
});
formatter.match({
  "location": "GmoSteps_so.i_should_be_navigated_to_GMO_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("D:/selenium/BDD_java/src/features/gmo_so.feature");
formatter.feature({
  "name": "Test GMO Post",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sofeature"
    }
  ]
});
formatter.scenario({
  "name": "Enter GMO OnLine site",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sofeature"
    },
    {
      "name": "@GMOHome"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on GMO home page",
  "keyword": "Given "
});
formatter.match({
  "location": "GmoSteps_so.i_am_on_GMO_home_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d78.0.3904.97)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027LAPTOP-R0SMGEJT\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.97, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\JITRAN~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:56489}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: e21b25879a2fda25d4b2d32aa65e0fcf\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat hooks.GmoSteps_so.i_am_on_GMO_home_page(GmoSteps_so.java:38)\r\n\tat ✽.I am on GMO home page(D:/selenium/BDD_java/src/features/gmo_so.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I Enter GMO site",
  "keyword": "When "
});
formatter.match({
  "location": "GmoSteps_so.i_Enter_GMO_site()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see Catalog page displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "GmoSteps_so.i_should_see_Catalog_page_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Order an item from the catalog displayed",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Catalog"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I am on Catalog page",
  "keyword": "Given "
});
formatter.step({
  "name": "I order \"\u003corderQty\u003e\" for item \"\u003citemDesc\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I should see quantity for \"\u003citemDesc\u003e\" equals \"\u003corderQty\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "orderQty",
        "itemDesc"
      ]
    },
    {
      "cells": [
        "10",
        "Hiking Boots"
      ]
    },
    {
      "cells": [
        "4",
        "3 Person Dome Tent"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Order an item from the catalog displayed",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sofeature"
    },
    {
      "name": "@Catalog"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I am on Catalog page",
  "keyword": "Given "
});
formatter.match({
  "location": "GmoSteps_so.i_am_on_Catalog_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d78.0.3904.97)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027LAPTOP-R0SMGEJT\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.97, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\JITRAN~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:56489}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: e21b25879a2fda25d4b2d32aa65e0fcf\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:281)\r\n\tat hooks.GmoSteps_so.i_am_on_Catalog_page(GmoSteps_so.java:59)\r\n\tat ✽.I am on Catalog page(D:/selenium/BDD_java/src/features/gmo_so.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I order \"10\" for item \"Hiking Boots\"",
  "keyword": "When "
});
formatter.match({
  "location": "GmoSteps_so.i_order_for_item(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see quantity for \"Hiking Boots\" equals \"10\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GmoSteps_so.i_should_see_quantity_for_equals(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Order an item from the catalog displayed",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sofeature"
    },
    {
      "name": "@Catalog"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I am on Catalog page",
  "keyword": "Given "
});
formatter.match({
  "location": "GmoSteps_so.i_am_on_Catalog_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d78.0.3904.97)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027LAPTOP-R0SMGEJT\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.97, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\JITRAN~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:56489}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: e21b25879a2fda25d4b2d32aa65e0fcf\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:281)\r\n\tat hooks.GmoSteps_so.i_am_on_Catalog_page(GmoSteps_so.java:59)\r\n\tat ✽.I am on Catalog page(D:/selenium/BDD_java/src/features/gmo_so.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I order \"4\" for item \"3 Person Dome Tent\"",
  "keyword": "When "
});
formatter.match({
  "location": "GmoSteps_so.i_order_for_item(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see quantity for \"3 Person Dome Tent\" equals \"4\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GmoSteps_so.i_should_see_quantity_for_equals(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Place the Order for items selected",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sofeature"
    },
    {
      "name": "@SelectItems"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I have selected the items",
  "keyword": "Given "
});
formatter.match({
  "location": "GmoSteps_so.i_have_selected_the_items()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d78.0.3904.97)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027LAPTOP-R0SMGEJT\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.97, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\JITRAN~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:56489}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: e21b25879a2fda25d4b2d32aa65e0fcf\n*** Element info: {Using\u003dcss selector, value\u003dh1\u003einput}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByCssSelector(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElements(By.java:441)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:311)\r\n\tat hooks.GmoSteps_so.i_have_selected_the_items(GmoSteps_so.java:84)\r\n\tat ✽.I have selected the items(D:/selenium/BDD_java/src/features/gmo_so.feature:22)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I place order",
  "keyword": "When "
});
formatter.match({
  "location": "GmoSteps_so.i_place_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should expect Place order page displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "GmoSteps_so.i_should_expect_Place_order_page_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Proceed with Order confirmation",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sofeature"
    },
    {
      "name": "@PlaceOrder"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I am on Place Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "GmoSteps_so.i_am_on_Place_Order_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d78.0.3904.97)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027LAPTOP-R0SMGEJT\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.97, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\JITRAN~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:56489}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: e21b25879a2fda25d4b2d32aa65e0fcf\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:281)\r\n\tat hooks.GmoSteps_so.i_am_on_Place_Order_page(GmoSteps_so.java:107)\r\n\tat ✽.I am on Place Order page(D:/selenium/BDD_java/src/features/gmo_so.feature:28)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I confirm my orders and proceed to billing",
  "keyword": "And "
});
formatter.match({
  "location": "GmoSteps_so.i_confirm_my_orders_and_proceed_to_billing()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see billing page",
  "keyword": "Then "
});
formatter.match({
  "location": "GmoSteps_so.i_should_see_billing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Provide billing address and checkout",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sofeature"
    },
    {
      "name": "@Billing"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I am on Billing page",
  "keyword": "Given "
});
formatter.match({
  "location": "GmoSteps_so.i_am_on_Billing_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d78.0.3904.97)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027LAPTOP-R0SMGEJT\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.97, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\JITRAN~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:56489}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: e21b25879a2fda25d4b2d32aa65e0fcf\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:281)\r\n\tat hooks.GmoSteps_so.i_am_on_Billing_page(GmoSteps_so.java:128)\r\n\tat ✽.I am on Billing page(D:/selenium/BDD_java/src/features/gmo_so.feature:34)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I input correct billing address",
  "keyword": "When "
});
formatter.match({
  "location": "GmoSteps_so.i_input_correct_billing_address()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I checkout",
  "keyword": "And "
});
formatter.match({
  "location": "GmoSteps_so.i_checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should be taken to receipt page",
  "keyword": "Then "
});
formatter.match({
  "location": "GmoSteps_so.i_should_be_taken_to_receipt_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "confirm receipt and return to GMO home page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sofeature"
    },
    {
      "name": "@Receipt"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I am in Receipt page",
  "keyword": "Given "
});
formatter.match({
  "location": "GmoSteps_so.i_am_in_Receipt_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d78.0.3904.97)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027LAPTOP-R0SMGEJT\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.97, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\JITRAN~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:56489}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: e21b25879a2fda25d4b2d32aa65e0fcf\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:281)\r\n\tat hooks.GmoSteps_so.i_am_in_Receipt_page(GmoSteps_so.java:166)\r\n\tat ✽.I am in Receipt page(D:/selenium/BDD_java/src/features/gmo_so.feature:41)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I opt to return to home page",
  "keyword": "When "
});
formatter.match({
  "location": "GmoSteps_so.i_opt_to_return_to_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should be navigated to GMO home page",
  "keyword": "Then "
});
formatter.match({
  "location": "GmoSteps_so.i_should_be_navigated_to_GMO_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});