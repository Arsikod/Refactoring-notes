inverse of: Hide Delegate

-Every time the client wants to use a new feature of the delegate,
I have to add a simple delegating method to the server.
After adding features for a while, I get irritated with all this forwarding.
The server class is just a middle man, and perhaps it’s time for the client to call the delegate directly.

**_before_**

```javascript
const manager = aPerson.manager;

class Person {
  get manager() {
    return this.department.manager;
  }
}
```

**_after_**

```javascript
const manager = aPerson.department.manager;
```
