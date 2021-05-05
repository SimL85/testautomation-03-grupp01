/// <reference types="cypress" />

import * as loginIndex from '../pages/login-page'
import * as indexPage from '../pages/index-page'
import * as clientsPage from '../pages/clients-page'
import * as clientNewPage from '../pages/client-new-page'
import * as clientEditPage from '../pages/editClientsPage'
import * as billsPage from '../pages/bills-page'
import * as billsNewPage from '../pages/bills-new-page'
import * as billsEditPage from '../pages/editBillsPage'
import * as roomsPage from '../pages/rooms-page'
import * as roomsNewPage from '../pages/rooms-new-page'
import * as roomEditPage from '../pages/editRoomsPage'

var faker = require('faker')

let randomName = faker.name.findName()
let randomMail = faker.internet.email()
let randomPhone = faker.phone.phoneNumber()
let randomValue = faker.datatype.number()

describe('Testsuite ', () => {


    beforeEach('login (TC1)', () => {
        cy.visit('/')
        loginIndex.confirmHeader('Login')
        loginIndex.loginUser('tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
        cy.percySnapshot('Login')
        cy.wait(1000)

    })


    afterEach('Logout (TC1)', () => {
        indexPage.logoutUser('Login')
        cy.percySnapshot('Logout')

    })

    it('Client registration (TC2)', () => {
        indexPage.viewClients('Clients')
        clientsPage.viewClientNew('New Client')
        clientNewPage.createClient('Pina Colada', 'pinacolada@gmail.com', '0701233234', 'Clients')
        cy.wait(1000)
        cy.percySnapshot('New client')
        cy.wait(1000)
        clientsPage.verifyLastClient('Pina Colada', 'pinacolada@gmail.com', '0701233234')
    })

    it('Edit the last Client (TC3)', () => {
        indexPage.viewClients('Clients')
        clientsPage.verifyEditLastClient('Client:')
        clientEditPage.editClient('pinacolada@yahoo.se', 'Clients')
        clientsPage.verifyLastClient('Pina Colada', 'pinacolada@yahoo.se', '0701233234')
        cy.wait(1000)
        cy.percySnapshot('Edit client')
        cy.wait(1000)

    })

    it('Delete the last Client (TC4)', () => {
        indexPage.viewClients('Clients')
        cy.percySnapshot('Delete client')
        cy.wait(1000)
        clientsPage.deleteLastClient('Clients')
        cy.wait(1000)
        cy.percySnapshot('Delete client confermation')
        cy.wait(1000)
    })

    it('Create a bill (TC5)', () => {
        indexPage.viewBills('Bills')
        billsPage.viewBillNew('New Bill')
        billsNewPage.createBill('5000', 'Bills')
        cy.wait(1000)
        cy.percySnapshot('Creating a bill')
        cy.wait(1000)
        billsPage.verifyLastBill('5000')
    })

    it('Edit the last bill (TC6)', () => {
        indexPage.viewBills('Bills')
        billsPage.verifyEditLastBill('Bill:')
        cy.wait(1000)
        cy.percySnapshot('Edit a bill')
        cy.wait(1000)
        billsEditPage.editLastBill('4500', 'Bills')
        cy.wait(1000)
        cy.percySnapshot('Verify edit a bill')
        cy.wait(1000)
        billsPage.verifyLastBill('4500')
    })

    it('Delete the last bill (TC7)', () => {
        indexPage.viewBills('Bills')
        cy.wait(1000)
        cy.percySnapshot('Delete a bill')
        cy.wait(1000)
        billsPage.deleteLastBill('Bills')
        cy.wait(1000)
        cy.percySnapshot('Verify delete a bill')
        cy.wait(1000)
    })

    it('Create a room (TC8)', () => {
        indexPage.viewRooms('Rooms')
        roomsPage.viewRoomNew('New Room')
        cy.wait(1000)
        cy.percySnapshot('Create a room')
        cy.wait(1000)
        roomsNewPage.createRoom('Twin', '1101', '11', '4000', ['Balcony', 'Ensuite', 'Penthouse'], 'Rooms')
        cy.wait(1000)
        cy.percySnapshot('Verify create a room')
        cy.wait(1000)
        roomsPage.verifyLastRoom('twin', '1101', '11', '4000', 'balcony')
    })

    it('Edit the last room (TC9)', () => {
        indexPage.viewRooms('Rooms')
        roomsPage.verifyEditLastRoom('Room:')
        roomEditPage.editRoom('1230', '12', 'Rooms')
        cy.wait(1000)
        cy.percySnapshot('Edit a room')
        cy.wait(1000)
        roomsPage.verifyLastRoom('twin', '1230', '12', '4000', 'balcony')
        cy.wait(1000)
        cy.percySnapshot('Verify edit a room')
        cy.wait(1000)

    })

    it('Delete the last room (TC10)', () => {
        indexPage.viewRooms('Rooms')
        roomsPage.deleteLastRoom('Rooms')
        cy.wait(1000)
        cy.percySnapshot('Delete a room')
        cy.wait(1000)
    })

    it('Client registration (TC2) with faker', () => {
        indexPage.viewClients('Clients')
        clientsPage.viewClientNew('New Client')
        clientNewPage.createClient(randomName, randomMail, randomPhone, 'Clients')
        cy.wait(1000)
        cy.percySnapshot('New client faker')
        cy.wait(1000)
        clientsPage.verifyLastClient(randomName, randomMail, randomPhone,)
    })

    it('Edit the last Client (TC3) with faker', () => {
        indexPage.viewClients('Clients')
        clientsPage.verifyEditLastClient('Client:')
        clientEditPage.editClient(randomMail, 'Clients')
        cy.wait(1000)
        cy.percySnapshot('Edit client faker')
        cy.wait(1000)
        clientsPage.verifyLastClient(randomName, randomMail, randomPhone)

    })

    it('Create a bill (TC5) with faker', () => {
        indexPage.viewBills('Bills')
        billsPage.viewBillNew('New Bill')
        billsNewPage.createBill(randomValue, 'Bills')
        cy.wait(1000)
        cy.percySnapshot('Creating a bill with faker')
        cy.wait(1000)
        billsPage.verifyLastBill(randomValue)
    })

    it('Edit the last bill (TC6) with faker', () => {
        indexPage.viewBills('Bills')
        billsPage.verifyEditLastBill('Bill:')
        billsEditPage.editLastBill(randomValue, 'Bills')
        cy.wait(1000)
        cy.percySnapshot('Edit a bill with faker')
        cy.wait(1000)
        billsPage.verifyLastBill(randomValue)
    })
})