/// <reference types="cypress" />

//-----------------------------------------------------------------//
//                          imports                                //
//-----------------------------------------------------------------//

import * as loginFunctions from '../pages/loginPage'
import * as headerFunctions from '../pages/headerPage'
import * as indexFunctions from '../pages/indexPage'
import * as clientsFunctions from '../pages/clientsPage'
import * as newClientFunctions from '../pages/newClientPage'
import * as billsFunctions from '../pages/billsPage'
import * as newBillFunctions from '../pages/newBillPage'
import * as roomsFunctions from '../pages/roomsPage'
import * as newRoomFunctions from '../pages/newRoomPage'
import * as reservationsFunctions from '../pages/reservationsPage'
import * as newReservationFunctions from '../pages/newReservationPage'
import * as editRoomsFunctions from "../pages/editRoomsPage"
import * as editBillsFunctions from "../pages/editBillsPage"
import * as editClientsFunctions from "../pages/editClientsPage"
import * as targets from "../targets/targets"

//-----------------------------------------------------------------//
//                          variables                              //
//-----------------------------------------------------------------//

var faker = require('faker');

let randomCategory = faker.random.arrayElement(["double", "single", "twin"]);
let randomNumber = faker.datatype.number({ min: 1, max: 1000 })
let randomFloor = faker.datatype.number({ min: 1, max: 50 })
let randomPrice = faker.datatype.number({ min: 1000, max: 10000 })
let randomFeature = faker.random.arrayElement(["balcony", "ensuite", "sea_view", "penthouse"]);

let randomCategory2 = faker.random.arrayElement(["double", "single", "twin"]);
let randomNumber2 = faker.datatype.number({ min: 1, max: 1000 })
let randomFloor2 = faker.datatype.number({ min: 1, max: 50 })
let randomPrice2 = faker.datatype.number({ min: 1000, max: 10000 })
let randomFeature2 = faker.random.arrayElement(['balcony', 'ensuite', 'sea_view', 'penthouse']);
let randomFeature3 = faker.random.arrayElement(['balcony', 'ensuite', 'sea_view', 'penthouse']);


//-----------------------------------------------------------------//
//                          test cases                             //
//-----------------------------------------------------------------//

describe("Testsuite", () => {
   beforeEach(() => {
      cy.visit('/')
      loginFunctions.checkElements()
      loginFunctions.validLogin(targets.username, targets.password, "Tester Hotel Overview")

   });


   it('Create a room ', () => {
      indexFunctions.openRoomsPage('Rooms')
      roomsFunctions.openNewRoomPage()
      cy.wait(1000)
      newRoomFunctions.createAvailableRoom(randomCategory,randomNumber,randomFloor,randomPrice,[randomFeature,randomFeature2,randomFeature3])
      roomsFunctions.validateAvailableRoom(randomCategory,randomNumber,randomFloor,'true',randomFeature)
      cy.wait(1000)

   })

   it("Edit a room", () => {
      indexFunctions.openRoomsPage('Rooms')
      editRoomsFunctions.editLastRoom(randomCategory,randomNumber,randomFloor,randomPrice,[randomFeature,randomFeature2,randomFeature3],'Rooms')

   });






   afterEach(() => {
      headerFunctions.performLogout()

   });


});

