/// <reference types="cypress" />

describe('Drag and Drop boxes', () => {

    const COLUMN_A_DIV = '#column-a';
    const COLUMN_B_DIV = '#column-b';

    beforeEach(() => {
        //cy.visit('/drag_and_drop') //If we put this here, each test (it) will reload the page and the previous drag and drop state will be lost (not desired for the example)
    })

    context('Move A to B', () => {

        it('Drag A to B', () => {
            cy.visit('/drag_and_drop') //load the page just in the first test
            const dataTransfer = new DataTransfer();
            drag_from(COLUMN_A_DIV, dataTransfer)
            drag_to(COLUMN_B_DIV, dataTransfer)
            cy.get(COLUMN_B_DIV).should('have.text', 'A') //so A moved from 1st to the 2nd box
        })

    })

    context('Move B to A', () => {
        it('Drag B to A - after A is on the right', () => {
            const dataTransfer = new DataTransfer();
            drag_from(COLUMN_B_DIV, dataTransfer)
            drag_to(COLUMN_A_DIV, dataTransfer)
            cy.get(COLUMN_B_DIV).should('have.text', 'B') //so A was moved back to their original place
        })

    })

    function drag_from(item, dataTransfer) {
        cy.get(item).trigger('dragstart', {
            dataTransfer
        })
    }

    function drag_to(item, dataTransfer) {
        cy.get(item).trigger('drop', {
            dataTransfer
        })
    }

})