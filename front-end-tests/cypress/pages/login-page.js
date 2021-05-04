/// <reference types="cypress" />


const HEADER = 'h2'
const USERNAME_FIELD = ':nth-child(1) > input'
const PASSWORD_FIELD = ':nth-child(2) > input'
const LOGIN_BTN = '.btn'



function confirmHeader(content) {
    cy.get(HEADER).should('contain', content)
}

function loginUser(username, password, content) {
    cy.get(USERNAME_FIELD).type(username)
    cy.get(PASSWORD_FIELD).type(password)
    cy.get(LOGIN_BTN).click()
    cy.get(HEADER).should('contain', content)
    cy.wait(500)
}


exports.default = {
    confirmHeader,
    loginUser
}