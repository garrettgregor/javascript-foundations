function createMeal(name, specialRequests, tableNumber) {
  let meal = {
    name: name,
    specialRequests: specialRequests,
    tableNumber: tableNumber,
    complete: false
  };

  return meal;
};

function getMade(meal) {
  meal.complete = true;
  return meal;
};

function announceMeal(meal) {
  if (meal.complete === true) {
    return `Order up - ${meal.name} for table ${meal.tableNumber}!`;
  } else {
    return `This ${meal.name} is not completed yet`;
  };
};

function createOrder(order) {
  var order = {
    tableNumber: order.name,
    meals: order.meals,
    completedMeals: []
  };

  return order;
};

function cookMeal(order, meal) {
  if (order.tableNumber === meal.tableNumber) {
    var completedMeal = getMade(meal);
    order.completedMeals.push(completedMeal.name);
  }

  return order;
};

function listOrders(order) {
  results = [];

  for (var i = 0; i < order.meals.length; i++) {
    results.push(order.meals[i].name);
  };

  return results;
};

function listSpecialRequests(order) {
  results = [];

  for (var i = 0; i < order.meals.length; i++) {
    for (var j = 0; j < order.meals[i].specialRequests.length; j++) {
      results.push(order.meals[i].specialRequests[j]);
    }
  };

  return results;
};

module.exports = {
  createMeal,
  getMade,
  announceMeal,
  createOrder,
  cookMeal,
  listOrders,
  listSpecialRequests
};
