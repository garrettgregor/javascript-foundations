function createVampire(name, animal) {
  let vampire = {
    name: name,
    pet: 'bat',
    ouncesDrank: 0,
    thirsty: true
  };

  if (animal) {
    vampire.pet = animal;
  };

  return vampire;
};

function encounterDeliciousVictim(vampire) {
  if (vampire.thirsty === true) {
    return `I WANT TO SUCK YOUR BLOOD!`;
  } else {
    return `No thanks, I am too full.`
  };
};

function drink(vampire) {

  if (vampire.ouncesDrank < 50) {
    vampire.ouncesDrank += 10;
    if (vampire.ouncesDrank >= 50) {
      vampire.thirsty = false;
    };
  };

  return vampire;
};

function inquirePlace(locations, query) {
  result = locations.includes(query);

  if (result === true) {
    return `Yes, I have spent some time in ${query}.`
  } else {
    return `No, I have never been to ${query}.`
  };
};

function findBatLovers(vampires) {
  let results = [];

  for (var i = 0; i < vampires.length; i++) {
    if (vampires[i].pet === 'bat') {
      results.push(vampires[i].name);
    };
  };

  return results
}

module.exports = {
  createVampire,
  drink,
  findBatLovers,
  encounterDeliciousVictim,
  inquirePlace
}