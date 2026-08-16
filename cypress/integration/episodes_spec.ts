/// <reference types="cypress" />
describe('Episodes', () => {
  before(() => {
    cy.visit('/episodes')
  })

  it('should episodes', () => {
    cy.get(`[data-cy="episode-list-item"]`).should('be.visible')
  })

  it('should render subscription options', () => {
    cy.fixture('subscription-options').then((subscriptions) => {
      subscriptions.map((subscription: string) =>
        cy.get(`[data-cy="subscription-${subscription}"]`).should('be.visible')
      )
    })
  })

  it('should render question button', () => {
    cy.get(`[data-cy="question-button"]`).should('be.visible')
  })

  it('should render follow on twitter button', () => {
    cy.get(`[data-cy="follow-button"]`).should('be.visible')
  })
})

describe('Episode page', () => {
  it('should resolve a legacy Simplecast id and load the player', () => {
    cy.visit('/episodes/306429')
    cy.contains('Career Progression for Product Designers').should('be.visible')
    cy.contains('Error loading episode').should('not.exist')
    cy.contains('Invalid Date').should('not.exist')
    cy.get('[data-cy="latest-episode"]')
      .should('be.visible')
      .and('have.attr', 'src')
      .and('include', 'player.simplecast.com/')
      .and('not.include', 'undefined')
  })
})

// prevent typescript isolated modules warning
export {}
