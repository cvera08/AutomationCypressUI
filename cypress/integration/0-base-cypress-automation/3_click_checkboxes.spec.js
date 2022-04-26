/// <reference types="cypress" />

describe('Checkbox Click', () => {

    const CHECKBOXES = '#checkboxes>input';

    beforeEach(() => {
        cy.visit('/checkboxes')
    })

    it('check checkbox 1', () => {
        cy.get(CHECKBOXES).first().check() //get the first checkbox
    })

    it('uncheck checkbox 2', () => {
        cy.get(CHECKBOXES).eq(1).uncheck() //get the second checkbox
    })

})