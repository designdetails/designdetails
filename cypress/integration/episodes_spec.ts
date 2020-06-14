/// <reference types="cypress" />
describe('Episodes', () => {
  before(() => {
    cy.visit('/episodes');
  });

  it('should episodes', () => {
    cy.get(`[data-cy="episode-list-item"]`).should('be.visible');
  });

  it('should render subscription options', () => {
    cy.fixture('subscription-options').then(subscriptions => {
      subscriptions.map((subscription: string) =>
        cy.get(`[data-cy="subscription-${subscription}"]`).should('be.visible')
      );
    });
  });

  it('should render suggested episodes', () => {
    cy.get(`[data-cy="suggested-episodes"]`).should('be.visible');
  });

  it('should render question button', () => {
    cy.get(`[data-cy="question-button"]`).should('be.visible');
  });

  it('should render follow on twitter button', () => {
    cy.get(`[data-cy="follow-button"]`).should('be.visible');
  });
});

// prevent typescript isolated modules warning
export { }