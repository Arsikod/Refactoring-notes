-Code is easier to understand when things that are related to each other appear together. If several lines of code access the same data structure, it's best for them to be together rather than intermingled with code accessing other data structures.
-Some people like to declare all their variables at the top of a function. I prefer to declare the variable just before I first use it.

**_before_**

```javascript
const pricingPlan = retrievePricingPlan();
const order = retreiveOrder();
let charge;
const chargePerUnit = pricingPlan.unit;
```

**_after_**

```javascript
const pricingPlan = retrievePricingPlan();
const chargePerUnit = pricingPlan.unit;
const order = retreiveOrder();
let charge;
```
