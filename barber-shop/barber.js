function createBarber(name, earnings, cuts) {
  const barber = {
    name: name,
  };

  if (earnings) {
    barber.earnings = earnings;
  };

  if (cuts) {
    barber.haircuts = [];

    for (var i = 0; i < cuts.length; i++) {
      barber.haircuts.push(cuts[i]);
    };
  }

  return barber
}

module.exports = {
  createBarber,
};