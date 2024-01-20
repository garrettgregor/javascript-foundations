function createDragon(name, rider, temperment) {
  let dragon = {
    name: name,
    timesEaten: 0,
    hungry: true
  };

  if (rider) {
    dragon.rider = rider;
  };

  if (temperment) {
    dragon.temperment = temperment;
  };

  return dragon;
};

function greetRider(dragon) {
  return `Hi, ${dragon.rider}!`
};

function eat(dragon) {
  dragon.timesEaten += 1

  if (dragon.timesEaten >= 3) {
    dragon.timesEaten = 3;
    dragon.hungry = false;
  };

  return dragon;
};

function findFireBreathers(dragons) {
  let results = []

  for (var i = 0; i < dragons.length; i++) {
    if (dragons[i].temperment === 'aggressive') {
      results.push(dragons[i]);
    };
  };

  return results;
}

module.exports = {
  createDragon,
  greetRider,
  eat,
  findFireBreathers
}