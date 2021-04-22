Create a new function, and name it after the intent of the function (name it by what it does, not by how it does it).

Look at a fragment of code, understand what it is doing, then extract it into its own function named after its purpose.

If you have to spend effort looking at a fragment of code and figuring out what it's doing, then you should extract it into a function and name the function after the “what.”

It's not unusual to have functions that are a single line.

Small functions like this only work if the names are good, so you need to pay good attention to naming.

Often, I see fragments of code in a larger function that start with a comment to say what they do. The comment is often a good hint for the name of the function when I extract that fragment.

**_before_**

```javascript
function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding();

  //print details
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
}
```

**_after_**

```javascript
function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding();
  printDetails(outstanding);

  function printDetails(outstanding) {
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
  }
}
```
