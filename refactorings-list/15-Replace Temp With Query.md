-This refactoring works best if I'm inside a class, since the class provides a shared context for the methods I'm extracting. Outside of a class, I'm liable to have too many parameters in a top-level function which negates much of the benefit of using a function.

**_before_**

```javascript
class Order {
  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }

  get price() {
    const basePrice = this._quantity * this._item.price;
    let discountFactor = 0.98;
    if (basePrice > 1000) discountFactor -= 0.03;
    return basePrice * discountFactor;
  }
}
```

**_after_**

```javascript
class Order {
  get basePrice() {
    return this._quantity * this._item.price;
  }

  get discountFactor() {
    let discountFactor = 0.98;
    if (this.basePrice > 1000) discountFactor -= 0.03;
    return discountFactor;
  }

  get price() {
    return this.basePrice * this.discountFactor;
  }
}
```
