function createFavoriteFood(object) {
  return {
    name: object.dish,
    ingredients: object.ingredients,
    isSpicy: object.isSpicy,
    timesOrdered: 0
  };
};

function commentOnSpiciness(dish) {
  if (dish.isSpicy === true) {
    return `Wow, this ${dish.name} is so spicy!`;
  } else {
    return `Phew, this ${dish.name} is not very spicy.`;
  };
};

function orderFood(dish) {
  dish.timesOrdered += 1;
  return dish;
};

function createShoppingList(dishes) {
  let results = []

  for (var i = 0; i < dishes.length; i++) {
    for (var j = 0; j < dishes[i].ingredients.length; j++) {
      if (!results.includes(dishes[i].ingredients[j])) {
        results.push(dishes[i].ingredients[j]);
      }
    }
  };

  return results;
}


module.exports = {
  createFavoriteFood,
  commentOnSpiciness,
  orderFood,
  createShoppingList
};