function createMaterial(name, unit, cost) {
  return {
    name: name,
    unit: unit,
    costPerUnit: cost
  }
}

function calculateMaterialCost(material, quantity) {
  var result = (material.costPerUnit * quantity);

  if(quantity > 1) {
    return `${quantity} ${material.unit}s of ${material.name} costs $${result}.`;
  } else {
    return `${quantity} ${material.unit} of ${material.name} costs $${result}.`;
  };
}

function createSupplyCloset(supplies) {
  var results = { supplies: [] };

  if(supplies) {
    for(var i = 0; i < supplies.length; i++) {
      results.supplies.push(supplies[i].name)
    };
  };

  return results;
}

function addSupply(closet, supply) {
  if(!closet.supplies.includes(supply.name)) {
    closet.supplies.push(supply.name);
  } else {
    return `You already have ${supply.name} in your closet!`;
  };

  return closet.supplies
}

function createNewProject(materials, status) {
  var project = {
    materialsNeeded: materials,
  };

  if(status) {
    project.status = status;
  } else {
    project.status = 'not started'
  }

  return project
}

// function compareMaterials(requirements, suppliesOnHand) {
//   // every is kind of like ruby's .all? method or an enumerable .each do
//   const allMaterialsAvailable = requirements.materialsNeeded.every(material => {
//     // written in ruby it might be something like:
//     // requirements.materialsNeeded.all? do |material|
//     //   suppliesOnHand.supplies.include?(material.name)
//     // end
//     return suppliesOnHand.supplies.includes(material.name);
//   });

//   if(allMaterialsAvailable) {
//     return 'Yay! You can start this project!';
//   } else {
//     return 'Oh no! You need to go shopping before you can start this project!';
//   }
// }

// The return statement on line 57 is part of an arrow function that is passed to the every method. This function is called for each element in the requirements.materialsNeeded array.

// Here's what it does:

// material => {...}: This is an arrow function that takes one argument, material. This argument represents the current element being processed in the requirements.materialsNeeded array.

// return suppliesOnHand.supplies.includes(material.name);: This line checks if the suppliesOnHand.supplies array includes the name of the current material. The includes method returns true if the array includes the specified item, and false otherwise. The return statement then returns this boolean value.

// The every method uses the returned boolean value to determine whether every element in the requirements.materialsNeeded array passes the test implemented by the provided function. If every call to the function returns true, the every method returns true. If any call returns false, the every method immediately returns false.

// So, the return statement on line 57 is used to return the result of the includes method for each element in the requirements.materialsNeeded array.

// // Written even more efficiently:
// Yes, the provided code is quite efficient. It uses the every method, which is a high-order function in JavaScript that tests whether all elements in the array pass the provided function. It stops executing as soon as it finds an element that returns false, which can save processing time compared to methods that always process the entire array.

// However, if the suppliesOnHand.supplies array is very large, the includes method could become a performance bottleneck because it has to potentially check every element in the array for each material in requirements.materialsNeeded.

// In such a case, you could convert suppliesOnHand.supplies to a Set, which has constant-time (very fast) lookup:

// function compareMaterials(requirements, suppliesOnHand) {
//   const suppliesSet = new Set(suppliesOnHand.supplies);
//   // console.log(suppliesSet);
//   const allMaterialsAvailable = requirements.materialsNeeded.every(material => {
//     return suppliesSet.has(material.name);
//   });

//   if(allMaterialsAvailable) {
//     return 'Yay! You can start this project!';
//   } else {
//     return 'Oh no! You need to go shopping before you can start this project!';
//   }
// }

// This version of the function creates a Set from suppliesOnHand.supplies and uses the has method instead of includes. The has method checks if a value is in the Set in constant time, which is faster than the includes method for large arrays.

// refactored from this for method using Copilot:
function compareMaterials(requirements, suppliesOnHand) {
  var results = []

  for(var i = 0; i < requirements.materialsNeeded.length; i++) {
    if(suppliesOnHand.supplies.includes(requirements.materialsNeeded[i].name)) {
      results.push(true);
    } else {
      results.push(false);
    }
  };

  if(results.includes(false)) {
    return 'Oh no! You need to go shopping before you can start this project!'
  } else {
    return 'Yay! You can start this project!'
  };
}

module.exports = {
  createMaterial,
  calculateMaterialCost,
  createSupplyCloset,
  addSupply,
  createNewProject,
  compareMaterials
}