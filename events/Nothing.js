'use strict';


events.on('shipping', ready);

events.on('shipping', transit);
events.on('shipping', delivered);


function ready(payload) {

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