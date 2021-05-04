/// <reference types="cypress" />

//////////////
// elements //
//////////////
const VIEW_BILLS_PAGE_BUTTON = ':nth-child(3) > .btn'
const CREATE_BILL_BUTTON = 'h2 > .btn'
const BILLS_LIST = '.bills'
const MEATBALLS_BUTTON = '.action'
const DELETE_BUTTON = '.menu > :nth-child(2)'


//////////////////////////////////
// functions / methods / actions//
//////////////////////////////////

function openNewBillPage(){
    cy.get(CREATE_BILL_BUTTON).click()
}

function validateUnpaidBill(value, paid){
    cy.get(BILLS_LIST).should('contain', value).and('contain', paid)
}

function validatePaidBill(value, paid){
    cy.get(BILLS_LIST).should('contain', value).and('contain', paid)
}

function removeLastBill(){
    cy.get(MEATBALLS_BUTTON).last().click()
    cy.get(DELETE_BUTTON).click()
}

//////////////////////
// export functions //
//////////////////////
module.exports = {
    openNewBillPage,
    validateUnpaidBill,
    validatePaidBill,
    removeLastBill
}
 