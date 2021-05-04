/// <reference types="cypress" />

//-----------------------------------------------------------------//
//                          imports                                //
//-----------------------------------------------------------------//
import * as loginFunctions from '../../pages/loginPage'
import * as headerFunctions from '../../pages/headerPage'
import * as indexFunctions from '../../pages/indexPage'
import * as clientsFunctions from '../../pages/clientsPage'
import * as newClientFunctions from '../../pages/newClientPage'
import * as billsFunctions from '../../pages/billsPage'
import * as newBillFunctions from '../../pages/newBillPage'
import * as roomsFunctions from '../../pages/roomsPage'
import * as newRoomFunctions from '../../pages/newRoomPage'
import * as reservationsFunctions from '../../pages/reservationsPage'
import * as newReservationFunctions from '../../pages/newReservationPage'

//-----------------------------------------------------------------//
//                          variables                              //
//-----------------------------------------------------------------//

const USERNAME = 'tester01';
const PASSWORD = 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c';

var faker = require('faker');

let randomName = faker.name.findName()
let randomEmail = faker.internet.email().toLowerCase();
let randomPhone = faker.phone.phoneNumber();
let billValue = faker.random.number({min:500, max:1000})

var faker = require('faker');
let category = faker.random.number({min:0, max:2});
let floor = faker.random.number({min:1, max:10});
let roomNumber = faker.random.number({min:1, max:20}) + (floor * 100);
let features = faker.random.number({min:0, max:3});
let price = faker.random.number({min:2, max:5}) * 100 * floor + (features * 500);

let start = faker.date.between('2020-12-01', '2020-12-31').toISOString();
let end  = faker.date.between('2021-01-01', '2021-01-31').toISOString();
let start_date = start.toString().substring(0,10);
let end_date = end.toString().substring(0, 10);


//-----------------------------------------------------------------//
//                          test cases                             //
//-----------------------------------------------------------------//

describe('Main spec file for all test cases', () => {
    
    beforeEach(() => {
        cy.log('Log in before every test')
        cy.visit('http://localhost:3000/login')
        loginFunctions.login(USERNAME, PASSWORD)
        cy.wait(500)
        cy.log('Logged in')
    })
    
    afterEach(() => {
        cy.log('Log out after each test')
        headerFunctions.performLogout()
    })

    it('Validate dashboard presence and content on all pages in the application', () =>{
        cy.log('checking the dashboard')
        indexFunctions.openClientsPage()
        clientsFunctions.openNewClientPage()
        headerFunctions.checkPages('tester01')
    })

    it('Create, validate and delete new Client', () => {
        indexFunctions.openClientsPage()
        clientsFunctions.openNewClientPage()
        newClientFunctions.createNewClient(randomName,randomEmail,randomPhone)
        clientsFunctions.validateCreatedClient(randomName,randomEmail,randomPhone)
        cy.wait(1000)
        clientsFunctions.removeLastClient()
        cy.wait(1000)
    })
    
    it('Create, validate and delete new unpaid Bill', () => {
        indexFunctions.openBillsPage()
        billsFunctions.openNewBillPage()
        newBillFunctions.createUnpaidBill(billValue)
        billsFunctions.validateUnpaidBill(billValue, 'No')
        cy.wait(2000)
        billsFunctions.removeLastBill()
    })

    it('Create, validate and delete new paid Bill', () => {
        indexFunctions.openBillsPage()
        billsFunctions.openNewBillPage()
        newBillFunctions.createPaidBill(billValue)
        billsFunctions.validatePaidBill(billValue, 'Yes')
        cy.wait(2000)
        billsFunctions.removeLastBill()
    })

    it('Create, validate and delete available Room', () => {
        indexFunctions.openRoomsPage()
        roomsFunctions.openNewRoomPage()
        newRoomFunctions.createAvailableRoom(category, roomNumber, floor, price, features)
        cy.wait(1000)
        roomsFunctions.validateAvailableRoom(category, roomNumber, floor, 'true', features)
        cy.wait(2000)
        roomsFunctions.removeLastRoom()
    })

    it('Create, validate and delete a Reservation', () => {
        // create new client //
        indexFunctions.openClientsPage()
        clientsFunctions.openNewClientPage()
        newClientFunctions.createNewClient(randomName,randomEmail,randomPhone)
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
    
})
