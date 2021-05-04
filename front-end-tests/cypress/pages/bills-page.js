/// <reference types="cypress" />

const CREATE_BILL_BTN = 'h2 > .btn'
const BILLS_LIST = '.bills'
const THREE_DOTS_BTN = 'img'
const EDIT_BTN = '.menu > :nth-child(1)'
const DELETE_BTN = '.menu > :nth-child(2)'

function viewBillNew(content) {
    cy.get(CREATE_BILL_BTN).click()
    cy.contains(content)
}

function verifyLastBill(value) {
    cy.get(BILLS_LIST).last()
    cy.contains(value)
}

function verifyEditLastBill(content) {
    cy.get(THREE_DOTS_BTN).last().click()
    cy.get(EDIT_BTN).click()
    cy.contains(content)
}

function deleteLastBill(content) {
    cy.get(THREE_DOTS_BTN).last().click()
    cy.get(DELETE_BTN).click()
    cy.contains(content)
}

exports.default = {
    viewBillNew,
    verifyLastBill,
    verifyEditLastBill,
    deleteLastBill
}