/// <reference types="cypress" />

//-----------------------------------------------------------------//
//                          imports                                //
//-----------------------------------------------------------------//

import * as loginFunctions from '../pages/loginPage'
import * as headerFunctions from '../pages/headerPage'
import * as indexFunctions from '../pages/indexFunctions'
import * as clientsFunctions from '../pages/clientsFunctions'
import * as newClientFunctions from '../pages/newClientFunctions'
import * as billsFunctions from '../pages/billsPage'
import * as newBillFunctions from '../pages/newBillPage'
import * as roomsFunctions from '../pages/roomsFunctions'
import * as newRoomFunctions from '../pages/newRoomFunctions'
import * as reservationsFunctions from '../pages/reservationsPage'
import * as newReservationFunctions from '../pages/newReservationPage'
import * as editRoomsFunctions from "../pages/editRoomsFunctions"
import * as editBillsFunctions from "../pages/editBillsPage"
import * as editClientsFunctions from "../pages/editClientsFunctions"
import * as targets from "../targets/targets"

//-----------------------------------------------------------------//
//                          variables                              //
//-----------------------------------------------------------------//

var faker = require('faker');

let randomName = faker.name.findName();
let randomMail = faker.internet.email();
let randomPhone = faker.phone.phoneNumber();

let randomName2 = faker.name.findName();
let randomMail2 = faker.internet.email();
let randomPhone2 = faker.phone.phoneNumber();
//let checkbox = " ✓ "    // "baseUrl": "http://localhost:3000",


let randomCategory = faker.random.arrayElement(["double","single","twin"]);
let randomNumber = faker.datatype.number({min: 1, max: 1000})
let randomFloor = faker.datatype.number({min: 1, max: 50})
let randomPrice = faker.datatype.number({min: 1000, max: 10000})
let randomFeature = faker.random.arrayElement(["balcony","ensuite","sea_view","penthouse"]);

let randomCategory2 = faker.random.arrayElement(["double","single","twin"]);
let randomNumber2 = faker.datatype.number({min: 1, max: 1000})
let randomFloor2 = faker.datatype.number({min: 1, max: 50})
let randomPrice2 = faker.datatype.number({min: 1000, max: 10000})
let randomFeature2 = faker.random.arrayElement(['balcony', 'ensuite', 'sea_view', 'penthouse']);

//-----------------------------------------------------------------//
//                          test cases                             //
//-----------------------------------------------------------------//

describe("Testsuite", () => {
    beforeEach(() => {
      cy.visit('/')
      loginFunctions.checkElements()
      loginFunctions.validLogin(targets.username, targets.password, "Tester Hotel Overview")
     
    });



/// TESTS FOR CLIENTS ///

        it("Create a new client", () => {
          indexFunctions.openClientsPage()
          clientsFunctions.openNewClientPage()
          newClientFunctions.validateNewClientPage()
          newClientFunctions.createNewClient(randomName, randomMail, randomPhone)
          clientsFunctions.validateCreatedClient(randomName, randomMail, randomPhone)

          cy.wait(500)
        });

 

        it("Edit last client", () => {
          indexFunctions.openClientsPage()
          editClientsFunctions.editClient(randomName2, randomMail2, randomPhone2, "Clients")
          clientsFunctions.validateCreatedClient(randomName2, randomMail2, randomPhone2)
          
          cy.wait(500)
        });

      
        it("Delete last client", () => {
          indexFunctions.openClientsPage("Clients") 
          clientsFunctions.removeLastClient()
         
          cy.wait(500)
        });
  


      
  

  afterEach(() => {
   headerFunctions.performLogout()         
 
});


});

