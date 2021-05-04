/// <reference types="cypress" />

const CREATE_ROOM_BTN = 'h2 > .btn'
const THREE_DOTS_BTN = 'img'
const EDIT_BTN = '.menu > :nth-child(1)'
const ROOMS_LIST = '.rooms'
const DELETE_BTN = '.menu > :nth-child(2)'

function viewRoomNew(content) {
    cy.get(CREATE_ROOM_BTN).click()
    cy.contains(content)
}

function verifyLastRoom(category, number, floor, price, features) {
    cy.get(ROOMS_LIST).last()
    cy.should('contain', floor)
        .and('contain', number)
        .and('contain', category)
        .and('contain', price)
        .and('contain', features)

}


function verifyEditLastRoom(content) {
    cy.get(THREE_DOTS_BTN).last().click()
    cy.get(EDIT_BTN).click()
    cy.contains(content)
}

function deleteLastRoom(content) {
    cy.get(THREE_DOTS_BTN).last().click()
    cy.get(DELETE_BTN).click()
    cy.contains(content)
}


exports.default = {
    viewRoomNew,
    verifyLastRoom,
    verifyEditLastRoom,
    deleteLastRoom
}