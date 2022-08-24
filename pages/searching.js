const { I } = inject();

module.exports = {
  locators:{
    txt:"#search_query_top"
  },

  btnsearch:"submit_search",

  search(data)
  {
    I.fillField(this.locators.txt,data);
    I.click(this.btnsearch);
  }
  // insert your locators and methods here
}
