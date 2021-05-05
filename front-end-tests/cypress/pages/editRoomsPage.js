/// <reference types="cypress" />

const NUMBER_FIELD = ':nth-child(4) > input'
const FLOOR_FIELD = ':nth-child(5) > input'
const SAVE_BTN = '.blue'

function editRoom(number, floor, content) {
    cy.get(NUMBER_FIELD).clear().type(number)
    cy.get(FLOOR_FIELD).clear().type(floor)
    cy.get(SAVE_BTN).click()
    cy.contains(content)
}


exports.default = {
    editRoom,

}