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
  airport.availableGates -= planesLanded;
  return airport;
}



module.exports = {
  createAirport,
  welcomeGuests,
  landPlanes,
  // checkAirlineLocations
};
