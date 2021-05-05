/// <reference types="cypress" />

import * as loginPage from "../pages/login-page"
import * as indexPage from "../pages/index-page"
import * as clientsPage from "../pages/clients-page"
import * as newClientPage from "../pages/new-client-page"
import * as roomsPage from "../pages/editRoomsPage"
import * as newRoomPage from "../pages/new-room-page"
import * as targets from "../targets/targets"

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


describe("Testsuite", () => {
    beforeEach(() => {
      cy.visit(baseUrl)
         loginPage.confirmHeader("Login")
         // cy.wait(500)
         // cy.percySnapshot("Login page");
      loginPage.loginUser(targets.username, targets.password, "Tester Hotel Overview")
         // cy.wait(500)
         // cy.percySnapshot("Tester Hotel Overview");
    });



/// TESTS FOR CLIENTS ///

        it("Create a new client", () => {
          indexPage.viewClients("Clients")
            //  cy.wait(500)
             // cy.percySnapshot("Clients page");
          clientsPage.viewNewClient("New Client")
             // cy.wait(500)
             // cy.percySnapshot("New Client Page");
          newClientPage.createNewClient(randomName, randomMail, randomPhone, "Clients")
          clientsPage.verifyLastClient(randomName, randomMail, randomPhone)
             // cy.wait(500)
             // cy.percySnapshot("New Client is created and verified")
          cy.wait(500)
        });

 

        it("Edit last client", () => {
          indexPage.viewClients("Clients")
             // cy.wait(500)
             // cy.percySnapshot("Clients page");
          clientsPage.editLastClient(randomName2, randomMail2, randomPhone2, "Clients")
          clientsPage.verifyLastClient(randomName2, randomMail2, randomPhone2, "Clients")
             // cy.wait(500)
             // cy.percySnapshot("Last Client is edited and verified");
          cy.wait(500)
        });

      
        it("Delete last client", () => {
          indexPage.viewClients("Clients")
             // cy.wait(500)
             // cy.percySnapshot("Clients page");
          //clientsPage.viewNewClient("New Client")
          clientsPage.deleteLastClient()
             // cy.wait(500)
             // cy.percySnapshot("Last Client is removed");
          cy.wait(500)
        });
  

 /// TESTS FOR ROOMS ///

  
  
        it("Create a new room", () => {
          indexPage.viewRooms("Rooms")
             // cy.wait(500)
             // cy.percySnapshot("Rooms page");
          roomsPage.viewNewRoom("New Room")
             // cy.wait(500)
             // cy.percySnapshot("New Room Page");
          newRoomPage.createNewRoom(randomCategory,randomNumber,randomFloor, randomPrice, randomFeature,"Rooms")
          cy.wait(500)
          if (randomFeature == "sea_view") {
            randomFeature = "sea view"
          }
          roomsPage.verifyLastRoom(randomCategory,randomNumber,randomFloor, randomPrice, randomFeature) 
             // cy.wait(500)
             // cy.percySnapshot("New Room is created and verified");
          cy.wait(500)
   
        });

        it("Edit last room", () => {

          indexPage.viewRooms("Rooms")
             // cy.wait(500)
             // cy.percySnapshot("Rooms page");
          roomsPage.editLastRoom(randomCategory2,randomNumber2,randomFloor2, randomPrice2, randomFeature2,"Rooms")
          cy.wait(500)
          if (randomFeature2 == "sea_view") {
            randomFeature2 = "sea view"
          }
          roomsPage.verifyLastRoom(randomCategory2,randomNumber2,randomFloor2, randomPrice2, randomFeature2)
             // cy.wait(500)
             // cy.percySnapshot("Last room is edited and verified");
          cy.wait(500)

        });
       
        it("Delete last room", () => {
          indexPage.viewRooms("Rooms")
             // cy.wait(500)
             // cy.percySnapshot("Rooms page");
          //clientsPage.viewNewClient("New Client")
          roomsPage.deleteLastRoom()
            // cy.wait(500)
            // cy.percySnapshot("Last Room is removed");
          cy.wait(500)
       
        });
        
        it("Logout", () => {
          indexPage.logoutUser("Login")
            // cy.wait(500)
            // cy.percySnapshot("User logges out and returns to Login page");
          cy.wait(500)
       
        });
  



    //after(() => {
    //      indexPage.logoutUser("Login")         
    //});
  //afterEach(() => {
  //    indexPage.logoutUser("Login")         
  //          });


});