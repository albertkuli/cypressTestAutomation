describe('Search Functionality', () => {
    const homePage = new HomePage();

    it('should show results for a valid wrestler', () => {
        homePage.searchForWrestler('John Doe');
        cy.get('.wrestler-results').should('contain', 'John Doe');
    });

    it('should show no results for an invalid wrestler', () => {
        homePage.searchForWrestler('Random Wrestler');
        homePage.checkNoResults();
    });
});