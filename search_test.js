Feature('search');

Scenario('search succesful', ({ I,searchingPage }) => {
    I.amOnPage('/');
    searchingPage.search('hello');
});
