import HomePage from '../support/pageObjects/HomePage';

describe('Basic Page Load and UI Checks', () => {
    const homePage = new HomePage();

    it('should load the page and check UI elements', () => {
        homePage.visit();
        homePage.checkTitle();
        homePage.checkMainBanner();
        homePage.checkEventDate();
    });
});

describe('Navigation & Tab Validation', () => {
    const homePage = new HomePage();

    it('should navigate and update URL for Results tab', () => {
        homePage.visit();
        homePage.clickTab('Results');
        homePage.verifyURL('results');
    });

    it('should navigate and update URL for News tab', () => {
        homePage.visit();
        homePage.clickTab('News');
        homePage.verifyURL('news');
    });
});