function createAirport(name, airlines, availableGates) {
  return {
    name: name,
    airlines: airlines,
    availableGates: availableGates
  };
}

function welcomeGuests(airport) {
  return `Welcome to ${airport.name}!`;
}

function landPlanes(airport, planesLanded) {
  airport.overflow = 0;

  for (var i = 0; i < planesLanded; i++) {
    if (airport.availableGates >= 1) {
      airport.availableGates -= 1;
    } else {
      airport.overflow += 1;
    };
  }

  if (airport.availableGates > 0) {
    airport.message = `Success! Current availability is ${airport.availableGates}.`;
  } else {
    airport.message = `Oh no! Not enough gates available. Current overflow is ${airport.overflow}.`;
  }

  return airport;
}

function checkAirlineLocations(airports, airline) {
  var locations = []

  for (var i = 0; i < airports.length; i++) {
    if (airports[i].airlines.includes(airline)) {
      locations.push(airports[i].name);
    }
  }

  return locations;
}



module.exports = {
  createAirport,
  welcomeGuests,
  landPlanes,
  checkAirlineLocations
};
