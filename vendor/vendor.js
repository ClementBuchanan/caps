'use strict';

const events = require('./hub.js');

console.log('I am the vendor');

let timestamp = 1616923662;
const date = new Date(timestamp * 1000);
const hours = date.getHours();

events.on('shipping', ready);
events.on('shipping', transit);
events.on('shpping', delivered);

function ready(payload) {
  if (payload.pickup === yes) {
    console.log('Alert driver. Package is ready for pickup.');
  } else {
    console.log('heavy weight');
  }
}

function transit(payload) {
  if (payload.transit === yes) {
    console.log('The package is in transit');
  }
}

function delivered(payload) {
  if (payload.delivered === yes) {
    console.log(`The package was delivered on ${date} at ${hours}`);
  } else {
    console.log('The package is still in transit');
  }
}