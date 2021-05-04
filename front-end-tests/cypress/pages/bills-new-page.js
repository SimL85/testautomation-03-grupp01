/// <reference types="cypress" />

const VALEU_SEK = 'input'
const PAID_CHECK_B = '.checkbox'
const SAVE_BTN = '.blue'

function createBill(value, content) {
    cy.get(VALEU_SEK).type(value)
    cy.get(PAID_CHECK_B).click()
    cy.get(SAVE_BTN).click()
    cy.contains(content)
}

exports.default = {
    createBill
}