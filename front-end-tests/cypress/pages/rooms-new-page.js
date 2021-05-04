/// <reference types="cypress" />

const CATEGORY_FIELD = ':nth-child(1) > select'
const NUMBER_FIELD = ':nth-child(2) > input'
const FLOOR_FIELD = ':nth-child(3) > input'
const AVAILABLE_CHECK_B = '.checkbox'
const PRICE_FIELD = ':nth-child(5) > input'
const FEATURES_FIELD = ':nth-child(6) > select'
const SAVE_BTN = '.blue'

function createRoom(category, number, floor, price, features, content) {
    cy.get(CATEGORY_FIELD).select(category)
    cy.get(NUMBER_FIELD).type(number)
    cy.get(FLOOR_FIELD).type(floor)
    cy.get(AVAILABLE_CHECK_B).click()
    cy.get(PRICE_FIELD).type(price)
    cy.get(FEATURES_FIELD).select(features)
    cy.get(SAVE_BTN).click()
    cy.contains(content)
}

exports.default = {
    createRoom
}