-A good name allows me to understand what the function does when I see it called, without seeing the code that defines its implementation.

-Often, a good way to improve a name is to write a comment to describe the function's purpose, then turn that comment into a name.

**_before_**

```javascript
function circum(radius) {
  return 2 * Math.PI * radius;
}
```

**_after_**

```javascript
function circum(radius) {
  return circumference(radius);
}

function circumference(radius) {
  return 2 * Math.PI * radius;
}
```
