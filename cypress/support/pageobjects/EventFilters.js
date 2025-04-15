class EventFilters {
    selectTeam(teamName) {
        cy.get('.team-filter').select(teamName);
    }

    selectWeightClass(weightClass) {
        cy.get('.weight-class-filter').select(weightClass);
    }

    selectRound(round) {
        cy.get('.round-filter').select(round);
    }

    applyFilters() {
        cy.get('.apply-filters-button').click();
    }

    clearFilters() {
        cy.get('.clear-filters-button').click();
    }

    getURL() {
        return cy.url();
    }
}

export default EventFilters;