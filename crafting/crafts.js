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

  for(var i = 0; i < supplies.length; i++) {
    results.supplies.push(supplies[i].name)
  };

  return results;

}

module.exports = {
  createMaterial,
  calculateMaterialCost,
  createSupplyCloset,
  // addSupply,
  // createNewProject,
  // compareMaterials
}