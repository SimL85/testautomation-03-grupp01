/// <reference types="cypress" />

//Elements
const NAME_FIELD = ":nth-child(1) > input"
const EMAIL_FIELD = ":nth-child(2) > input"
const TEL_NUMBER_FIELD = ":nth-child(3) > input"
const SAVE_BTN = ".blue"

//Functions

function createNewClient(name, mail, number, content) {
    cy.get(NAME_FIELD).type(name)
    cy.get(EMAIL_FIELD).type(mail)
    cy.get(TEL_NUMBER_FIELD).type(number)
    cy.get(SAVE_BTN).click()
    cy.contains(content)
}

//Exports
exports.default = {
    createNewClient
}