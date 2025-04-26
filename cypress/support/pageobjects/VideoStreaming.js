class VideoStreaming {
    checkVideoLoaded() {
        cy.get('.video-player').should('be.visible');
    }

    clickVideoLink() {
        cy.get('.video-link').click();
        cy.url().should('include', 'video');
    }
}

export default VideoStreaming;