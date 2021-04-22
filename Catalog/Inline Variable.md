-You may find that a variable gets in the way of refactoring the neighboring code. In these cases, it can be useful to inline the variable.

**_before_**

```javascript
let basePrice = anOrder.basePrice;
return basePrice > 1000;
```

**_after_**

```javascript
return anOrder.basePrice > 1000;
```
