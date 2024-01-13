function createMaterial(name, unit, cost) {
  return {
    name: name,
    unit: unit,
    costPerUnit: cost
  }
}

module.exports = {
  createMaterial,
  // calculateMaterialCost,
  // createSupplyCloset,
  // addSupply,
  // createNewProject,
  // compareMaterials
}