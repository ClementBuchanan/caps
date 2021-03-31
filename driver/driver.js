'use strict';

const events = require('../events/events.js');

events.on('pickup', getsPackage);
events.on('enRoute', enRoute);


function getsPackage(payload) {
  setTimeout(() => {
    console.log(`Your package: Order ID: ${payload.orderId}, is being picked up for delivery`);
    events.emit('enRoute', payload);
  }, 1000)
}

function enRoute(payload) {
  setTimeout(() => {
    console.log(`Your package: Order ID: ${payload.orderId}\n`);
    events.emit('event', payload)
  }, 3000)
}

module.exports.getsPackage;
module.exports.enRoute;