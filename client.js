
events.on('alert', serverAlerted);
events.on('alert', driverAlerted);
events.on('alert', packagePickup);
events.on('alert', tranStatus);
events.on('alert', delStatus);
events.on('alert', vendorSDelStatus);

events.on('alert', payload => {
  serverAlerted(payload);
  driverAlerted(payload);
  packagePickup(payload);
  tranStatus(payload);
  delStatus(payload);
  vendorSDelStatus(payload);
});

function serverAlerted(payload) {
  if (payload.time <= 25) {
    console.log('Pickup scheduled');
  } else {
    console.log('Pickup not scheduled');
  }
}

function driverAlerted(payload) {
  if (payload.time >= 50) {
    console.log('Package is picked up');
  } else {
    console.log('Package not yet picked up');
  }
}

function packagePickup(payload) {
  if (payload.time >= 60) {
    console.log('Package out for delivery');
  } else {
    console.log('Package still at the wharehouse');
  }
}

function tranStatus(payload) {
  if (payload.time >= 65) {
    console.log('Package is out for delivery');
  } else {
    console.log('Package is still at the wharehouse');
  }
}

function delStatus(payload) {
  if (payload.time >= 70) {
    console.log('Package have been delivered');
  } else {
    console.log('Package will be delivered tomorrow');
  }
}

function vendorSDelStatus(payload) {
  if (payload.time >= 75) {
    console.log('Your package have been delivered');
  } else {
    console.log('Pickup not scheduled');
  }
}