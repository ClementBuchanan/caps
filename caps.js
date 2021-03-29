'use strict';

const Driver = require('./driver/driver.js');
const Vendor = require('./vendor/vendor.js');
const events = require('./hub.js');

setInterval(() => {
  let date = new Date();
  let timestamp = date.getTime();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  console.log('\n -------- \n');

  let payload = {
    timestamp: timestamp,
    date: date,
    hours: hours,
    minutes: minutes
  };
  console.log(payload);

  events.emit('alert', payload);
}, 2000);