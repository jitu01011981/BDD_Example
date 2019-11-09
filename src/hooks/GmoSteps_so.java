package hooks;

import java.util.List;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GmoSteps_so {
	static WebDriver driver=null;

	@Before("@GMOHome")  // executes before scenario mentioned in the feature file
	public void setUp() {
		System.out.println("In setup");
		 System.setProperty("webdriver.chrome.driver","D:\\Drivers\\chromedriver_win32\\chromedriver.exe"); 
		driver =new ChromeDriver();
	}

	@After("@Receipt") // executes after scenario mentioned in the feature file
	public void tearDown() {
		System.out.println("In teardown");
		driver.quit();
	}

	@Given("^I am on GMO home page$")
	public void i_am_on_GMO_home_page() {
		// Write code here that turns the phrase above into concrete actions
		System.out.println(Thread.currentThread().getStackTrace()[1].getMethodName());
		driver.get("http://demo.borland.com/gmopost");
	}

	@When("^I Enter GMO site$")
	public void i_Enter_GMO_site() {
		// Write code here that turns the phrase above into concrete actions
		System.out.println(Thread.currentThread().getStackTrace()[1].getMethodName());
		driver.findElement(By.name("bSubmit")).click();
	}

	@Then("^I should see Catalog page displayed$")
	public void i_should_see_Catalog_page_displayed() {
		// Write code here that turns the phrase above into concrete actions
		System.out.println(Thread.currentThread().getStackTrace()[1].getMethodName());
		Assert.assertEquals("OnLine Catalog", driver.getTitle());
	}

	@Given("^I am on Catalog page$")
	public void i_am_on_Catalog_page() {
		// Write code here that turns the phrase above into concrete actions
		System.out.println(Thread.currentThread().getStackTrace()[1].getMethodName());
		Assert.assertEquals("OnLine Catalog", driver.getTitle());
	}

	@When("^I order \"([^\"]*)\" for item \"([^\"]*)\"$")
	public void i_order_for_item(String qty, String item) {
		// Write code here that turns the phrase above into concrete actions
		System.out.println(Thread.currentThread().getStackTrace()[1].getMethodName());
		String[] item_name=item.split(" ");
		WebElement we=driver.findElement(By.xpath("//input[contains(@name,'" + item_name[item_name.length-1].toUpperCase()+ "')]"));
		we.clear();we.sendKeys(qty);
	}

	@Then("^I should see quantity for \"([^\"]*)\" equals \"([^\"]*)\"$")
	public void i_should_see_quantity_for_equals(String item, String qty) {
		// Write code here that turns the phrase above into concrete actions
		System.out.println(Thread.currentThread().getStackTrace()[1].getMethodName());
		String[] item_name=item.split(" ");
		WebElement we=driver.findElement(By.xpath("//input[contains(@name,'" + item_name[item_name.length-1].toUpperCase()+ "')]"));
		String itemQty=we.getAttribute("value");
		Assert.assertEquals(qty, itemQty);
	}

	@Given("^I have selected the items$")
	public void i_have_selected_the_items() {
		// Write code here that turns the phrase above into concrete actions
		List<WebElement> items = driver.findElements(By.cssSelector("h1>input"));		
		long count = items.stream().filter(item->!item.getAttribute("value").equals("0")).count();
		Assert.assertTrue(count>=1);		
	}

	@When("^I place order$")
	public void i_place_order() {
		// Write code here that turns the phrase above into concrete actions
		System.out.println(Thread.currentThread().getStackTrace()[1].getMethodName());
		driver.findElement(By.name("bSubmit")).click();
	}

	@Then("^I should expect Place order page displayed$")
	public void i_should_expect_Place_order_page_displayed() {
		// Write code here that turns the phrase above into concrete actions
		System.out.println(Thread.currentThread().getStackTrace()[1].getMethodName());
		Assert.assertEquals("Place Order", driver.getTitle());
	}

	@Given("^I am on Place Order page$")
	public void i_am_on_Place_Order_page() {
		// Write code here that turns the phrase above into concrete actions
		System.out.println(Thread.currentThread().getStackTrace()[1].getMethodName());
		Assert.assertEquals("Place Order", driver.getTitle());
	}

	@Given("^I confirm my orders and proceed to billing$")
	public void i_confirm_my_orders_and_proceed_to_billing() {
		// Write code here that turns the phrase above into concrete actions
		System.out.println(Thread.currentThread().getStackTrace()[1].getMethodName());
		driver.findElement(By.name("bSubmit")).click();
	}

	@Then("^I should see billing page$")
	public void i_should_see_billing_page() {
		// Write code here that turns the phrase above into concrete actions
		System.out.println(Thread.currentThread().getStackTrace()[1].getMethodName());
		Assert.assertEquals("Billing Information", driver.getTitle());
	}

	@Given("^I am on Billing page$")
	public void i_am_on_Billing_page() {
		// Write code here that turns the phrase above into concrete actions
		System.out.println(Thread.currentThread().getStackTrace()[1].getMethodName());
		Assert.assertEquals("Billing Information", driver.getTitle());
	}

	@When("^I input correct billing address$")
	public void i_input_correct_billing_address() {
		// Write code here that turns the phrase above into concrete actions
		System.out.println(Thread.currentThread().getStackTrace()[1].getMethodName());
		driver.findElement(By.name("billName")).sendKeys("syn");
		driver.findElement(By.name("billAddress")).sendKeys("hinjewadi");
		driver.findElement(By.name("billCity")).sendKeys("pune");
		driver.findElement(By.name("billState")).sendKeys("mah");
		driver.findElement(By.name("billZipCode")).sendKeys("12345");
		driver.findElement(By.name("billPhone")).sendKeys("1234567890");
		driver.findElement(By.name("billEmail")).sendKeys("syn@syn.in");
		driver.findElement(By.cssSelector("select option:nth-child(2)")).click();
		driver.findElement(By.name("CardNumber")).sendKeys("1234567890123456");
		driver.findElement(By.name("CardDate")).sendKeys("12/20");
		driver.findElement(By.name("shipSameAsBill")).click();
	}

	@When("^I checkout$")
	public void i_checkout() {
		// Write code here that turns the phrase above into concrete actions
		System.out.println(Thread.currentThread().getStackTrace()[1].getMethodName());
		driver.findElement(By.name("bSubmit")).click();
	}

	@Then("^I should be taken to receipt page$")
	public void i_should_be_taken_to_receipt_page() {
		// Write code here that turns the phrase above into concrete actions
		System.out.println(Thread.currentThread().getStackTrace()[1].getMethodName());
		Assert.assertEquals("OnLine Store Receipt", driver.getTitle());
	}

	@Given("^I am in Receipt page$")
	public void i_am_in_Receipt_page() {
		// Write code here that turns the phrase above into concrete actions
		System.out.println(Thread.currentThread().getStackTrace()[1].getMethodName());
		Assert.assertEquals("OnLine Store Receipt", driver.getTitle());
	}

	@When("^I opt to return to home page$")
	public void i_opt_to_return_to_home_page() {
		// Write code here that turns the phrase above into concrete actions
		System.out.println(Thread.currentThread().getStackTrace()[1].getMethodName());
		driver.findElement(By.name("bSubmit")).click();
	}

	@Then("^I should be navigated to GMO home page$")
	public void i_should_be_navigated_to_GMO_home_page() {
		// Write code here that turns the phrase above into concrete actions
		System.out.println(Thread.currentThread().getStackTrace()[1].getMethodName());
		Assert.assertEquals("Welcome to Green Mountain Outpost", driver.getTitle());
	}


	@When("^I order for items$") 
	public void i_order_for_items(DataTable datatable) {
		System.out.println(Thread.currentThread().getStackTrace()[1].getMethodName());
		List<List<String>> qtyItems= datatable.raw();
		System.out.println("qtyItems="+qtyItems.size()+"\n"+"qtyItems1="+qtyItems.get(0).size()); 
		for(int i=0;i<qtyItems.size();i++) { 
			String[] item_name=qtyItems.get(i).get(0).split(" "); 
			WebElement we=driver.findElement(By.xpath("//input[contains(@name,'" +item_name[item_name.length-1].toUpperCase()+ "')]"));
			we.clear();we.sendKeys(qtyItems.get(i).get(1)); 
			System.out.println("Item name:"+ qtyItems.get(i).get(0)+"="+qtyItems.get(i).get(1));
		}
	}
}
