function createBarber(name, earnings, cuts) {
  const barber = {
    name: name,
  };

  if (earnings) {
    barber.earnings = earnings;
  } else {
    barber.earnings = 0.00;
  };

  if (cuts) {
    barber.haircuts = [];

    for (var i = 0; i < cuts.length; i++) {
      barber.haircuts.push(cuts[i]);
    };
  } else {
    barber.haircuts = [];
  }

  return barber
}

function giveCompliment(compliment) {
  return `This ${compliment.style} looks great!`
}

function cutHair(barber, cut) {
  barber.haircuts.push(cut);
  barber.earnings += cut.price;

  return barber;
}

function listStyles(barber, desiredLength) {
  var results = [];

  for (var i = 0; i < barber.haircuts.length; i++) {
    if (barber.haircuts[i].hairLength.includes(desiredLength)) {
      results.push(barber.haircuts[i].style);
    };
  };

  return results;
}

module.exports = {
  createBarber,
  giveCompliment,
  cutHair,
  listStyles,
};