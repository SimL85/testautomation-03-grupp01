/// <reference types="cypress" />

const EMAIL_FIELD = ':nth-child(4) > input'
const SAVE_BTN = '.blue'

function editClient(email, content) {
    cy.get(EMAIL_FIELD).clear().type(email)
    cy.get(SAVE_BTN).click()
    cy.contains(content)
}



exports.default = {
    editClient,

}