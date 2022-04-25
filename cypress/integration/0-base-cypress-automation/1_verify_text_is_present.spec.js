/// <reference types="cypress" />

describe('Text Management', () => {

  const WELCOME_LABEL = '#content.large-12.columns h1.heading';
  const WELCOME_TEXT = 'Welcome to the-internet'
  const AVAILABLE_LABEL = '#content.large-12.columns h2';
  const AVAILABLE_PARTIAL_TEXT = 'Available Examp'

  beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/')
  })

  it('Welcome to the-internet - Title is displayed by default', () => {
      cy.get(WELCOME_LABEL).should('have.text', WELCOME_TEXT)
  })

  it('Available Examples - Partial Text is displayed by default', () => {
      cy.get(AVAILABLE_LABEL).contains(AVAILABLE_PARTIAL_TEXT)
  })

})