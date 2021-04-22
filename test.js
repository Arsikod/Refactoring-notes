class Reading {
  constructor(customer, quantity, month, year) {
    this._customer = customer;
    this._quantity = quantity;
    this._month = month;
    this._year = year;
  }

  get customer() {
    return this._customer;
  }
  get quantity() {
    return this._quantity;
  }
  get month() {
    return this._month;
  }
  get year() {
    return this._year;
  }

  get baseCharge() {
    console.log(this.year);
  }
}

const reading = new Reading("Nurbol", 10, 4, 2021);
reading.baseCharge;
