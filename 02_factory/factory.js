class Car {
  constructor(model, price, insurance) {
    this.model = model;
    this.price = price;
    this.insurance = insurance;
  }
}

class CarFactory {
  create(type) {
    if (type === 'bmw') {
      return new Car('BMW X5', 10800, true);
    } else if (type === 'audi') {
      return new Car('Audi R8', 67777, false);
    }
  }
}
