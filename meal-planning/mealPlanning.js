function createMeal(type, numOfCalories) {
  return {
    type: type,
    calorieGoal: numOfCalories,
    dishes: []
  }
};

function addDish(meal,dish) {
  if (dish.calories <= meal.calorieGoal) {
    meal.calorieGoal -= dish.calories;
    meal.dishes.push(dish);
  };

  return meal;
};

function calculateCalories(meal) {
  count = 0;

  for (var i = 0; i < meal.dishes.length; i++) {
    count += meal.dishes[i].calories;
  };

  return `${meal.type} has a total of ${count} calories.`;
}

module.exports = {
  createMeal,
  addDish,
  calculateCalories
}