import Car from './10-car';

// eslint-disable-next-line camelcase
export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);

    // eslint-disable-next-line no-unused-vars
    this._range = range;
  }

  cloneCar() {
    // eslint-disable-next-line no-console
    console.log('Cloning car...');
    const NewObj = this.constructor[Symbol.species] || this.constructor;
    const clone = new NewObj();
    return clone;
  }
}
