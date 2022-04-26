/// <reference types="cypress" />

describe('Select items from a Dropdown List', () => {

    const OPTION_DROPDOWNLIST = '#dropdown';
    const SELECTED_OPTION = 'select#dropdown option:selected';

    const OPTIONS = Object.freeze({
        0: "Please select an option",
        1: "Option 1",
        2: "Option 2",
    })

    beforeEach(() => {
        cy.visit('/dropdown')
    })

    it('DDL is displayed', () => {
        cy.get(OPTION_DROPDOWNLIST)
    })

    it('Select "Option 1"', () => {
        cy.get(OPTION_DROPDOWNLIST).select(OPTIONS[1])
    })

    it('Select "Option 2" and validate the VALUE of the selected option', () => {
        //selectOption('Option 2')
        selectOption(OPTIONS[2])
        cy.get(OPTION_DROPDOWNLIST).should('have.value', '2')
    })

    it('Select "Option 1" and validate the TEXT of the selected option', () => {
        selectOption('Option 1')
        cy.get(SELECTED_OPTION).should('have.text', 'Option 1')
    })

    it('Print logs of the selected options', () => {
        printSelectedOptionLogs()
        selectOption('Option 1')
        printSelectedOptionLogs()
        selectOption('Option 2')
        printSelectedOptionLogs()

    })

    function selectOption(optionText) {
        cy.get(OPTION_DROPDOWNLIST).select(optionText)
    }

    function printSelectedOptionLogs() {
        cy.get(SELECTED_OPTION).then(function($elem) {
            cy.log("Selected option: " + $elem.text())
        })
    }

})