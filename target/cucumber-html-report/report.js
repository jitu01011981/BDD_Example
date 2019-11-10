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
  "status": "passed"
});
formatter.step({
  "name": "I order \"10\" for item \"Hiking Boots\"",
  "keyword": "When "
});
formatter.match({
  "location": "GmoSteps_so.i_order_for_item(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see quantity for \"Hiking Boots\" equals \"10\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GmoSteps_so.i_should_see_quantity_for_equals(String,String)"
});
formatter.result({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "I order \"4\" for item \"3 Person Dome Tent\"",
  "keyword": "When "
});
formatter.match({
  "location": "GmoSteps_so.i_order_for_item(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see quantity for \"3 Person Dome Tent\" equals \"4\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GmoSteps_so.i_should_see_quantity_for_equals(String,String)"
});
formatter.result({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "I place order",
  "keyword": "When "
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
});