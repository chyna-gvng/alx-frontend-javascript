import Car from "./10-car";

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand);
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  cloneCar() {
    const car = new Car(this._brand);
    car._motor = this._motor;
    car._color = this._color;
    car._range = this._range;
    return car;
  }
}

export default EVCar;
