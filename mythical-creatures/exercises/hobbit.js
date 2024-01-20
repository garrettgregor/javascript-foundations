function createHobbit(name, age) {
  let hobbit = {
    name: 'unknown',
    age: 0,
    isAdult: false,
    isOld: false,
    hasRing: false,
    acquaintances: []
  };

  if (name) {
    hobbit.name = name;
  };

  if (age) {
    hobbit.age = age;
  };

  return hobbit;
};

function celebrateBirthday(hobbit) {
  hobbit.age += 1;

  if (hobbit.age > 32) {
    hobbit.isAdult = true;
  };

  if (hobbit.age > 100) {
    hobbit.isOld = true;
  };

  return hobbit;
};

function getRing(hobbit) {
  if (hobbit.name === 'Frodo') {
    hobbit.hasRing = true;
    return `Here is the ring!`;
  } else {
    return `You can't have it!`;
  };
};

function meetPeople(hobbit, peopleToMeet) {
  for (var i = 0; i < peopleToMeet.length; i++) {
    if (!hobbit.acquaintances.includes(peopleToMeet[i])) {
      hobbit.acquaintances.push(peopleToMeet[i]);
    };
  };

  return hobbit;
};

function findFriends(hobbit) {
  results = [];

  for (var i = 0; i < hobbit.acquaintances.length; i++) {
    if (hobbit.acquaintances[i].relationship === 'friend') {
      results.push(hobbit.acquaintances[i].name);
    };
  };

  return results;
};

module.exports = {
  createHobbit,
  celebrateBirthday,
  getRing,
  meetPeople,
  findFriends
}