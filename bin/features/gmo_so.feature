@Sofeature
Feature: Test GMO Post 

@GMOHome @SmokeTest @Regression
Scenario: Enter GMO OnLine site 
	Given I am on GMO home page 
	When I Enter GMO site 
	Then I should see Catalog page displayed 
	
@Catalog @SmokeTest @Regression
Scenario Outline: Order an item from the catalog displayed 
	Given I am on Catalog page 
	When I order "<orderQty>" for item "<itemDesc>" 
	Then I should see quantity for "<itemDesc>" equals "<orderQty>" 
	Examples: 
		| orderQty       | itemDesc           |
		|       10       | Hiking Boots       |
		|      4         | 3 Person Dome Tent |
		
@SelectItems @SmokeTest
Scenario: Place the Order for items selected 
	Given I have selected the items 
	When I place order 
	Then I should expect Place order page displayed 
	
@PlaceOrder @SmokeTest @Regression
Scenario: Proceed with Order confirmation 
	Given I am on Place Order page 
	And I confirm my orders and proceed to billing 
	Then I should see billing page 
	
@Billing @SmokeTest @Regression
Scenario: Provide billing address and checkout 
	Given I am on Billing page 
	When I input correct billing address 
	And I checkout 
	Then I should be taken to receipt page 
	
@Receipt @Regression
Scenario: confirm receipt and return to GMO home page 
	Given I am in Receipt page 
	When I opt to return to home page 
	Then I should be navigated to GMO home page 