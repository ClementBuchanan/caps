'use strict';

require('./driver.js');
require('./vendor.js');

const events = require('./hub.js');

setInterval(() => {
  let b = Math.random() * 100;
  console.log('\n -------- \n');

  let payload = {
    status: b,
  };
  console.log(payload);

  events.emit('alert', payload);
}, 250);