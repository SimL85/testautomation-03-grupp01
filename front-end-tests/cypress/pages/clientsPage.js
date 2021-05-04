/// <reference types="cypress" />

/////////////
// elements//
/////////////

const CREATE_CLIENT_BUTTON = 'h2 > .btn'
const MEATBALLS_BUTTON = '.action > img'
const DELETE_BUTTON = '.menu > :nth-child(2)'
const CLIENT_LIST = '.client'

//////////////////////////////////
// functions / methods / actions//
//////////////////////////////////

function openNewClientPage(){
    cy.get(CREATE_CLIENT_BUTTON).click()
}

function validateCreatedClient(name, email, telephone){
    cy.get(CLIENT_LIST).should('contain', name).and('contain', email).and('contain', telephone)
}

function removeLastClient(){
    cy.get(MEATBALLS_BUTTON).last().click()
    cy.get(DELETE_BUTTON).click()
}

/////////////////////
// export functions//
/////////////////////
module.exports = {
    openNewClientPage,
    validateCreatedClient,
    removeLastClient
}