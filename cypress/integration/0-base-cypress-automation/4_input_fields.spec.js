/// <reference types="cypress" />

describe('Full fill input fields', () => {

    const NUMBER_INPUT = 'input[type=number]';

    beforeEach(() => {
        cy.visit('/inputs')
    })

    it('Type "1980"', () => {
        cy.get(NUMBER_INPUT).type("1980")
    })

    it('Increase number by two - 100 > 102', () => {
        cy.get(NUMBER_INPUT).type('100')
        cy.get(NUMBER_INPUT).type('{upArrow}{upArrow}')
    })

    it('Decrease number by one - 100 > 99', () => {
        cy.get(NUMBER_INPUT).type('100')
        cy.get(NUMBER_INPUT).type('{downArrow}')
    })

})