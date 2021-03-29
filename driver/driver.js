'use strict';

const events = require('../hub.js');

events.on('alert', getsPackage);

let timestamp = 1616923662;
const date = new Date(timestamp * 1000);
const hours = date.getHours();

function getsPackage(payload) {
  if (payload.notify === true) {
    console.log('Your package is being picked up for delivery');
    events.emit('alert', `Your package was picked up on, ${date} at ${hours}`);
  }
}
