/// <reference types="cypress" />
const NAME_FIELD = ':nth-child(1) > input'
const EMAIL_FIELD = ':nth-child(2) > input'
const PHONE_FIELD = ':nth-child(3) > input'
const SAVE_BTN = '.blue'

function createClient(name, email, phone, content) {
    cy.get(NAME_FIELD).type(name)
    cy.get(EMAIL_FIELD).type(email)
    cy.get(PHONE_FIELD).type(phone)
    cy.get(SAVE_BTN).click()
    cy.contains(content)
}

exports.default = {
    createClient
}