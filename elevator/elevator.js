function createElevator(building, numOfFloors, currentFloor, passengers) {
  var elevator = {
    building: building,
    floors: numOfFloors,
    currentFloor: currentFloor,
    passengers: passengers
  };

  return elevator;
};

function changeFloors(elevator, destinationFloor) {
  let withinFloors = destinationFloor <= elevator.floors && destinationFloor > 0
  let sameFloor = elevator.currentFloor === destinationFloor

  if (withinFloors && !sameFloor) {
    return `Taking you to floor ${destinationFloor}!`
  } else if (withinFloors && sameFloor) {
    return `You're already on floor ${elevator.currentFloor}!`
  } else if (!withinFloors) {
    return `Floor ${destinationFloor} does not exist!`
  };
};

function dropOffPassenger(elevator, passenger) {
  for(var i = 0; i < elevator.passengers.length; i++) {
    console.log(elevator.passengers[i])
    if (elevator.passengers[i] === passenger) {
      elevator.passengers.splice(i, 1); // Use splice, not slice
      break; // Exit the loop once the passenger is found and removed
    };
  };
  
  return elevator.passengers
}

module.exports = {
  createElevator,
  changeFloors,
  dropOffPassenger,
};
