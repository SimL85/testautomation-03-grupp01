/// <reference types="cypress" />

//////////////
// elements //
//////////////

const CREATE_ROOM_BUTTON = 'h2 > .btn'
const ROOMS_LIST = '.rooms'
const FEATURES_LIST = [ 'balcony',
                        'ensuite',
                        'sea view',
                        'penthouse'
                    ]

const MEATBALLS_BUTTON = '.action'
const DELETE_BUTTON = '.menu > :nth-child(2)'

//////////////////////////////////
// functions / methods / actions//
//////////////////////////////////

function openNewRoomPage(){
    cy.get(CREATE_ROOM_BUTTON).click()
}

function validateAvailableRoom(category, number, floor, available, features){
    cy.log(category)
    cy.log(number)
    cy.log(floor)
    cy.log(features)
    cy.log(FEATURES_LIST[features])
    let feature = FEATURES_LIST[features]
    cy.log(feature)
    cy.get(ROOMS_LIST)
        .should('contain', category)
        .and('contain', number)
        .and('contain', floor)
        .and('contain', available)
        .and('contain', FEATURES_LIST[features])
}

function removeLastRoom(){
    cy.get(MEATBALLS_BUTTON).last().click()
    cy.get(DELETE_BUTTON).click()
}

//////////////////////
// export functions //
//////////////////////
module.exports = {
    openNewRoomPage,
    validateAvailableRoom,
    removeLastRoom
}