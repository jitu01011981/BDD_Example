package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features = "D:\\selenium\\BDD_java\\src\\features",
		glue="hooks",
				monochrome=true,
				dryRun=false,
				plugin = {"pretty", "html:target/cucumber-html-report"}
		
		//tags= {"@Sofeature"}
		//tags = {"@Sofeature","@GMOHome,@SmokeTest,@Regression,@Catalog,@SelectItems,@PlaceOrder,@Billing,@Receipt"}
		
		)
	
public class TestRun_gmo {

}
