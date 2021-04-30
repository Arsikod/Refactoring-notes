-This refactoring works best if I'm inside a class, since the class provides a shared context for the methods I'm extracting. Outside of a class, I'm liable to have too many parameters in a top-level function which negates much of the benefit of using a function.

**_before_**

```javascript
const basePrice = this._quantity * this._itemPrice;
if (basePrice > 1000) return basePrice * 0.95;
else return basePrice * 0.98;
```

**_after_**

```javascript
get basePrice() {this._quantity * this._itemPrice;}

...

if (this.basePrice > 1000)
  return this.basePrice * 0.95;
else
  return this.basePrice * 0.98;
```
