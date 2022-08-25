const { I } = inject();

module.exports = {
  locators:{
    email:"#email_create",
    f_name:"#customer_firstname",
    l_name:"#customer_lastname",
    password:"#passwd",
    DOB_day:"#days",
    DOB_month:"#months",
    DOB_year:"#years",
    Address_1:"#address1",
    Address_2:"#address2",
    City:"#city",
    state:"#id_state",
    p_code:"#postcode",
    country:"#id_country",
    mobile:"#phone_mobile",
  },

  btnsignin:"Sign in",
  btncreate:"Create an account",
  btngender:"#id_gender1",
  chksignup:"#newsletter",
  chkoffer:"#optin",

  search(data,f_name,l_name,password,day,month,year,add1,add2,City,state,code,country,mobile)
  {
    I.click(this.btnsignin);
    I.fillField(this.locators.email,data);
    I.click(this.btncreate);
    I.wait(10);
    I.click(this.btngender);
    I.wait(2);
    I.fillField(this.locators.f_name,f_name);
    I.fillField(this.locators.l_name,l_name);
    I.fillField(this.locators.password,password);
    I.selectOption(this.locators.DOB_day,day);
    I.selectOption(this.locators.DOB_month,month);
    I.selectOption(this.locators.DOB_year,year);
    I.click(this.chksignup);
    I.click(this.chkoffer);
    I.fillField(this.locators.Address_1,add1);
    I.fillField(this.locators.Address_2,add2);
    I.fillField(this.locators.City,City);
    I.selectOption(this.locators.state,state);
    I.fillField(this.locators.p_code,code);
    I.selectOption(this.locators.country,country);
    I.fillField(this.locators.mobile,mobile);
    I.wait(5);
    
    // I.waitForText("Create an account",5);
  }
  // insert your locators and methods here
}
