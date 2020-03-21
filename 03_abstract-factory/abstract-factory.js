class Car {
  constructor(model, price, insurance) {
    this.model = model;
    this.price = price;
    this.insurance = insurance;
  }
}

class FamilyCarFactory {
  create(type) {
    if (type === 'honda') {
      return new Car('Honda Passport', 50000, true);
    } else if (type === 'ford') {
      return new Car('Ford Expedition', 67777, false);
    }
  }
}

class SportCarFactory {
  create(type) {
    if (type === 'bmw') {
      return new Car('BMW X5', 10800, true);
    } else if (type === 'audi') {
      return new Car('Audi R8', 67777, false);
    }
  }
}

class CarProducer {
  constructor(type) {
    return (type === 'sport') ? SportCarFactory : FamilyCarFactory;
  }
}
