class Car {
  constructor(model, price, insurance, autopilot) {
    this.model = model;
    this.price = price;
    this.insurance = insurance;
    this.autopilot = autopilot;
  }

  produce() {
    return new Car(this.model, this.price, this.insurance, this.autopilot);
  }
}


