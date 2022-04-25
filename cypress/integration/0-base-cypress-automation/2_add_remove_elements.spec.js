/// <reference types="cypress" />

describe('Button Click', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/add_remove_elements/')
  })
  const ADD_BUTTON = 'button[onclick="addElement()"]';
  const DELETE_BUTTON = '#elements button';


 it('displays "Add Element" button by default', () => {
    cy.get(ADD_BUTTON).should('have.length', 1)
  })

  it('user is able to click "Add Element"', () => {
    cy.get(ADD_BUTTON).click()
  })

  it('user is able to click "Delete" after "Add Element"', () => {
    cy.get(ADD_BUTTON).click()
    cy.get(DELETE_BUTTON).click()
  })
  })

  