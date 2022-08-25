Feature('search');

Scenario('search succesful', ({ I,searchingPage }) => {
    I.amOnPage('/');
    searchingPage.search('anuj@anu.com','Anuj','Tiwari','ABCD@123','17','July','1997','Farshi stop','V M Height','Amravati','New York','44460','United States','9192939495');
});
