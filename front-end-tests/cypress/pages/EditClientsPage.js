/// <reference types="cypress" />

const EDIT_NAME_FIELD = ":nth-child(3) > input"
const EDIT_EMAIL_FIELD = ":nth-child(4) > input"
const EDIT_PHONE_FIELD = ":nth-child(5) > input"
const SAVE_BTN = '.blue'

function editClient(name, mail, number) {
    cy.get(EDIT_NAME_FIELD).clear().type(name)
    cy.get(EDIT_PHONE_FIELD).clear().type(number)
    cy.get(EDIT_EMAIL_FIELD).clear().type(mail)
    cy.get(SAVE_BTN).click()

}



exports.default = {
    editClient

}