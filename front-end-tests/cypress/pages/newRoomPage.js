/// <reference types="cypress" />

//////////////
// elements //
//////////////
const SAVE_BUTTON = '.blue'
const CATEGORY = ':nth-child(1) > select'
const CATEGORY_VALUES = [   'Double',
                            'Single',
                            'Twin'
]
const NUMBER_TEXTFIELD = ':nth-child(2) > input'
const FLOOR_TEXTFIELD = ':nth-child(3) > input'
const PRICE_TEXT_FIELD = ':nth-child(5) > input'
const AVAILABLE_CHECKBOX = '.checkbox'
const FEATURES = ':nth-child(6) > select'
const FEATURES_LIST_VALUES = [ 'balcony',
                        'ensuite',
                        'sea_view',
                        'penthouse'
                    ]

//////////////////////////////////
// functions / methods / actions//
//////////////////////////////////

function createAvailableRoom(category, number, floor, price, features){
    cy.get(CATEGORY).select(CATEGORY_VALUES[category])
    cy.get(NUMBER_TEXTFIELD).type(number)
    cy.get(FLOOR_TEXTFIELD).type(floor)
    cy.get(PRICE_TEXT_FIELD).type(price)
    cy.get(FEATURES).select(FEATURES_LIST_VALUES[features])
    cy.get(AVAILABLE_CHECKBOX).click()
    cy.get(SAVE_BUTTON).click()    
}

//////////////////////
// export functions //
//////////////////////
module.exports = {    
    createAvailableRoom
}