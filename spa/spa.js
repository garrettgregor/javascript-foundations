function createCustomer(name, bill, bookings) {
  let customer = {
    name: name,
    bill: bill,
    bookings: []
  };

  if (bookings) {
    customer.bookings = bookings;
  };

  return customer;
};

function greeting(customer) {
  if (customer.bookings.length === 0) {
    return `${customer.name}! Welcome to Happy Spa`;
  } else {
    return `${customer.name}! Welcome back to Happy Spa`
  };
};

function createService(name, cost) {
  if (!name || !cost) {
    return `Please provide service name and cost.`;
  } else {
    return {
      name: name,
      cost: cost
    };
  };
};

function bookServices(customer, service) {
  customer.bookings.push(service.name);
  customer.bill += service.cost;
  return customer;
};

function applyGiftCard(services, giftCardAmount) {
  results = [];

  for (var i = 0; i < services.length; i++) {
    if (services[i].cost <= giftCardAmount) {
      results.push(services[i].name);
    };
  };

  return results;
}

module.exports = {
  createCustomer,
  greeting,
  createService,
  bookServices,
  applyGiftCard
}
