-When I see a group of functions that operate closely together on a common body of data (usually passed as arguments to the function call), I see an opportunity to form a class.

**_before_**

```javascript
function base(aReading) {...}
function taxableCharge(aReading) {...}
function calculateBaseCharge(aReading) {...}
```

**_after_**

```javascript
class Reading {
  base() {...}
  taxableCharge() {...}
  calculateBaseCharge() {...}
}
```
