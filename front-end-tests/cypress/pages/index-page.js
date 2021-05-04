/// <reference types="cypress" />

//Elements
const LOGOUT_BUTTON = ".user > .btn"
const VIEW_CLIENTS_BTN = ".blocks > :nth-child(2) > .btn"
const VIEW_ROOMS_BTN = ".blocks > :nth-child(1) > .btn"

//Functions

function logoutUser(content) {
    cy.get(LOGOUT_BUTTON).click()
    cy.contains(content)
}

function viewClients(content) {
    cy.get(VIEW_CLIENTS_BTN).click()
    cy.contains(content)
}

function viewRooms(content) {
    cy.get(VIEW_ROOMS_BTN).click()
    cy.contains(content)
}



//Exports
exports.default = {
    logoutUser,
    viewClients,
    viewRooms
}