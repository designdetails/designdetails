/// <reference types="cypress" />

import { golden } from '../../src/config/supporters'
import team from '../../src/config/team'

describe('Home', () => {
  before(() => {
    cy.visit('/')
  })

  it('should render latest episode', () => {
    cy.get(`[data-cy="latest-episode"]`).should('be.visible')
  })

  it('should render subscription options', () => {
    cy.fixture('subscription-options').then((subscriptions) => {
      subscriptions.map((subscription: string) =>
        cy.get(`[data-cy="subscription-${subscription}"]`).should('be.visible')
      )
    })
  })

  it('should render suggested episodes', () => {
    cy.get(`[data-cy="suggested-episodes"]`).should('be.visible')
  })

  it('should render golden microphones', () => {
    golden.map((gold) =>
      cy.get(`[data-cy="golden-${gold.name}"]`).should('be.visible')
    )
  })

  it('should render question button', () => {
    cy.get(`[data-cy="question-button"]`).should('be.visible')
  })

  it('should render follow on twitter button', () => {
    cy.get(`[data-cy="follow-button"]`).should('be.visible')
  })

  it('should render team members', () => {
    team.map((team) =>
      cy.get(`[data-cy="team-${team.name}"]`).should('be.visible')
    )
  })
})
