/// <reference types="cypress" />

//-----------------------------------------------------------------//
//                          imports                                //
//-----------------------------------------------------------------//

import * as loginFunctions from "../pages/loginPage";
import * as headerFunctions from "../pages/headerPage";
import * as indexFunctions from "../pages/indexPage";
import * as clientsFunctions from "../pages/clientsPage";
import * as newClientFunctions from "../pages/newClientPage";
import * as billsFunctions from "../pages/billsPage";
import * as newBillFunctions from "../pages/newBillPage";
import * as roomsFunctions from "../pages/roomsPage";
import * as newRoomFunctions from "../pages/newRoomPage";
import * as reservationsFunctions from "../pages/reservationsPage";
import * as newReservationFunctions from "../pages/newReservationPage";
import * as editRoomsFunctions from "../pages/editRoomsPage";
import * as editBillsFunctions from "../pages/editBillsPage";
import * as editClientsFunctions from "../pages/editClientsPage";
import * as targets from "../targets/targets";

//-----------------------------------------------------------------//
//                          variables                              //
//-----------------------------------------------------------------//

var faker = require("faker");

// Anna //

var faker = require("faker");

let randomName = faker.name.findName();
let randomEmail = faker.internet.email().toLowerCase();
let randomPhone = faker.phone.phoneNumber();
let billValue = faker.datatype.number({ min: 500, max: 1000 });

let category = faker.datatype.number({ min: 0, max: 2 });
let floor = faker.datatype.number({ min: 1, max: 10 });
let roomNumber = faker.datatype.number({ min: 1, max: 20 }) + floor * 100;
let features = faker.datatype.number({ min: 0, max: 3 });
let price = faker.datatype.number({ min: 2, max: 5 }) * 100 * floor + features * 500;

let start = faker.date.between("2020-12-01", "2020-12-31").toISOString();
let end = faker.date.between("2021-01-01", "2021-01-31").toISOString();
let start_date = start.toString().substring(0, 10);
let end_date = end.toString().substring(0, 10);

//-----------------------------------------------------------------//
//                          test cases                             //
//-----------------------------------------------------------------//

describe("Testsuite", () => {
   beforeEach(() => {
      cy.visit("/");
      loginFunctions.checkElements();
      loginFunctions.validLogin(
         targets.username,
         targets.password,
         "Tester Hotel Overview"
      );
   });

   afterEach(() => {
      headerFunctions.performLogout();
   });

   it("Validate dashboard presence and content on all pages in the application", () => {
      cy.log("checking the dashboard");
      indexFunctions.openClientsPage();
      clientsFunctions.openNewClientPage();
      headerFunctions.checkPages("tester01");
   });

   it('Create, validate and delete new paid Bill', () => {
      indexFunctions.openBillsPage()
      billsFunctions.openNewBillPage()
      newBillFunctions.createPaidBill(billValue)
      billsFunctions.validatePaidBill(billValue, 'Yes')
      cy.wait(2000)
      billsFunctions.removeLastBill()
   })

   it("Create, validate and delete new unpaid Bill", () => {
      indexFunctions.openBillsPage();
      billsFunctions.openNewBillPage();
      newBillFunctions.createUnpaidBill(billValue);
      billsFunctions.validateUnpaidBill(billValue, "No");
      cy.wait(2000);
      billsFunctions.removeLastBill();
   });

   it('Create, validate and delete a Reservation', () => {
      // create new client //
      indexFunctions.openClientsPage()
      clientsFunctions.openNewClientPage()
      newClientFunctions.createNewClient(randomName, randomEmail, randomPhone)
      headerFunctions.backToIndex()

      // create new bill
      indexFunctions.openBillsPage()
      billsFunctions.openNewBillPage()
      newBillFunctions.createUnpaidBill(billValue)
      headerFunctions.backToIndex()

      // create new available room
      indexFunctions.openRoomsPage()
      roomsFunctions.openNewRoomPage()
      newRoomFunctions.createAvailableRoom(category, roomNumber, floor, price, features)
      headerFunctions.backToIndex()

      // create reservation
      indexFunctions.openReservationsPage()
      reservationsFunctions.openCreateReservationPage()
      newReservationFunctions.createReservation(start_date, end_date)
      cy.wait(3000)

      //validate reservation
      reservationsFunctions.validateReservation(randomName, start_date, end_date)
      cy.wait(3000)

      // remove everything
      reservationsFunctions.removeReservation()
      cy.wait(1000)
      headerFunctions.backToIndex()
      indexFunctions.openClientsPage()
      clientsFunctions.removeLastClient()
      cy.wait(1000)
      headerFunctions.backToIndex()
      indexFunctions.openRoomsPage()
      roomsFunctions.removeLastRoom()
      cy.wait(1000)
      headerFunctions.backToIndex()
      indexFunctions.openBillsPage()
      billsFunctions.removeLastBill()
      cy.wait(1000)
      headerFunctions.backToIndex()
   })


});
