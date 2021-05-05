/// <reference types="cypress" />

//Elements
const HEADER = "h2"
const USERNAME_FIELD = ":nth-child(1) > input"
const PASSWORD_FIELD = ":nth-child(2) > input"
const LOGIN_BUTTON = ".btn"

//Functions

function confirmHeader(content) {
    cy.get(HEADER).should("contain", content)
}

function loginUser(userName, password, content) {
    cy.get(USERNAME_FIELD).type(userName)
    cy.get(PASSWORD_FIELD).type(password)
    cy.get(LOGIN_BUTTON).click()
    cy.get(HEADER).should("contain", content)
    cy.wait(500)
    
}


//Exports
exports.default = {
    confirmHeader,
    loginUser
}