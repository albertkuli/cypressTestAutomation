class HomePage {
    visit() {
        cy.visit('https://www.flowrestling.org/events/12932757-2025-eiwa-championship');
    }

    checkTitle() {
        cy.title().should('include', '2025 EIWA Championship');
    }

    checkMainBanner() {
        cy.get('.main-event-banner').should('be.visible');
    }

    checkEventDate() {
        cy.get('.event-date').should('be.visible');
    }

    searchForWrestler(name) {
        cy.get('.search-bar').type(name);
        cy.get('.search-button').click();
    }

    checkNoResults() {
        cy.get('.no-results-message').should('be.visible');
    }
}

export default HomePage;