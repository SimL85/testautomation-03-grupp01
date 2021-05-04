/// <reference types="cypress" />

//Elements
const CREATE_CLIENT_BTN = "h2 > .btn"
const CLIENT_LIST = ".clients"
const DROP_DOWN_BTN = ".action > img"
const DELETE_BTN = ".menu > :nth-child(2)"
const EDIT_BTN = ".menu > :nth-child(1)"
const HEADER = "h2 > div"
const EDIT_NAME_FIELD = ":nth-child(3) > input"
const EDIT_EMAIL_FIELD = ":nth-child(4) > input"
const EDIT_PHONE_FIELD = ":nth-child(5) > input"
const SAVE_BTN = ".blue"

//Functions

function viewNewClient(content) {
    cy.get(CREATE_CLIENT_BTN).click()
    cy.contains(content)
}

function verifyLastClient(name, mail, phone) {
    cy.get(CLIENT_LIST).last()
    .should("contain", name)
    .and("contain", mail)
    .and("contain", phone)
}

function editLastClient(name, mail, number, content) {
  //  cy.get(CLIENT_LIST).last()
   // .should("contain", name)
  //  .and("contain", mail)
   // .and("contain", number)

    cy.get(DROP_DOWN_BTN).last().click()
    cy.get(EDIT_BTN).click()
    cy.get(EDIT_NAME_FIELD).clear()
    cy.get(EDIT_EMAIL_FIELD).clear()
    cy.get(EDIT_PHONE_FIELD).clear()

    cy.get(EDIT_NAME_FIELD).type(name)
    cy.get(EDIT_EMAIL_FIELD).type(mail)
    cy.get(EDIT_PHONE_FIELD).type(number)
    cy.get(SAVE_BTN).click()
    cy.get(HEADER).should("contain", content) //Client: 2
   // cy.contains(content2)

}

function deleteLastClient() {
    // cy.get(CLIENT_LIST).last()
     cy.get(DROP_DOWN_BTN).last().click()
     cy.get(DELETE_BTN).click()
 
 }

//Exports
exports.default = {
    viewNewClient,
    verifyLastClient,
    editLastClient,
    deleteLastClient
}