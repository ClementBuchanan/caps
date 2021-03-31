'use strict';

const events = require('../events/events.js');
const faker = require('faker');
const { fake } = require('faker');

console.log('I am the vendor', fake);

events.on('start', newSale)
events.on('event', delivered)


function newSale() {
  setInterval(() => {
    let payload = {
      storeName: faker.company.companyName(),
      customerName: faker.name.findName(),
      customerAddress: faker.address.streetAddress(),
      customerZipcode: faker.address.zipCode(),

    }

    console.log(`New sale item is ready for pickup\n
    ${payload.storeName}\n
    ${payload.customerName}\n
    ${payload.customerAddress}\n
    ${payload.customerZipcode}\n`)

    events.emit('pickup', payload);
  }, 2000);
}

function delivered(payload) {
  console.log(`Your package ${payload.orderId} was delivered on ${new Date()}`)
}

module.exports = newSale;
module.exports = delivered;