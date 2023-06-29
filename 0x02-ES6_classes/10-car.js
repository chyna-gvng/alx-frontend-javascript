class Car {
    constructor(brand, motor, color) {
      this._brand = brand;
      this._motor = motor;
      this._color = color;
    }
  
    cloneCar() {
      const car = new Car();
      Object.getOwnPropertySymbols(this).forEach((symbol) => {
        car[symbol] = this[symbol];
      });
      return car;
    }
  }
  
  export default Car;
  