-As soon as I realize I want to do something other than simple printing, I like to create a new class for that bit of data.
At first, such a class does little more than wrap the primitive—but once I have that class, I have a place to put behavior specific to its needs.

- For example replace phone/email string with class and let it decide if it is valid or not

**exaple 1**

```ts
type CustomerRawData = {
  phone: string;
  email: string;
};

class Email {
  private _email: string;
  private readonly EMAIL_REGEX =
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  constructor(email: string) {
    this._email = email;
  }

  isValid() {
    return this.EMAIL_REGEX.test(this._email);
  }
}

class Phone {
  private _phone: string;
  private readonly PHONE_REGEX = /\d{2}\ \d{8}/;

  constructor(phone: string) {
    this._phone = phone;
  }

  isValid() {
    return this.PHONE_REGEX.test(this._phone);
  }

  getAreaCode() {
    return this._phone.split(" ")[0];
  }

  getNumber() {
    return this._phone.split(" ")[1];
  }
}

class Customer {
  private _phone: Phone;
  private _email: Email;

  constructor(customerData: CustomerRawData) {
    const { phone, email } = customerData;

    this._phone = new Phone(phone);
    this._email = new Email(email);
  }

  getEmail() {
    return this._email;
  }

  getPhone() {
    return this._phone;
  }
}

const customer = new Customer({
  phone: "11 12345678",
  email: "test@email.com",
});

console.log(customer.getEmail().isValid());
console.log(customer.getPhone().isValid());
```

**example 2**
**_before_**

```javascript
class Order…

  constructor(data) {
    this.priority = data.priority;
    // more initialization
```

**_after_**

```javascript
class Priority…

  constructor(value) {
    if (value instanceof Priority) return value;
    if (Priority.legalValues().includes(value))
      this._value = value;
    else
      throw new Error(`<${value}> is invalid for Priority`);
  }
  toString() {return this._value;}
  get _index() {return Priority.legalValues().findIndex(s => s === this._value);}
  static legalValues() {return ['low', 'normal', 'high', 'rush'];}

  equals(other) {return this._index === other._index;}
  higherThan(other) {return this._index > other._index;}
  lowerThan(other) {return this._index < other._index;}
```
