/// <reference types="cypress" />

//Elements
const CATEGORY_FIELD = ":nth-child(1) > select"
const NUMBER_FIELD = ":nth-child(2) > input"
const FLOOR_FIELD = ":nth-child(3) > input"
const AVAILABLE_CHECKBOX = ".checkbox"
const PRICE_FIELD = ":nth-child(5) > input"
const FEATURES_FIELD = ":nth-child(6) > select"
const SAVE_BTN = ".blue"

//Functions

function createNewRoom(category, number, floor, price, feature, content) {
    cy.get(CATEGORY_FIELD).select(category)
    cy.get(NUMBER_FIELD).type(number)
    cy.get(FLOOR_FIELD).type(floor)
    cy.get(AVAILABLE_CHECKBOX).click()
    cy.get(PRICE_FIELD).type(price)
    cy.get(FEATURES_FIELD).select(feature)
    cy.get(SAVE_BTN).click()
    cy.contains(content)
}

//Exports
exports.default = {
    createNewRoom
}