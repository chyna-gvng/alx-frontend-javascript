import Car from './10-car';

/* eslint-disable no-underscore-dangle */

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    // call constructor of super class (Building)
    super(brand, motor, color);

    // Create objs
    this._range = range;
  }

  // Methods

  cloneCar() {
    const NewObj = this.constructor[Symbol.species] || this.constructor;
    const clone = new NewObj();
    return clone;
  }

}
// eslint-disable-next-line import/no-unresolved

