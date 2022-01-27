-Simple record structures have disadvantages. The most annoying one is that they force me to clearly separate what is stored in the record from calculated values.

**_before_**

```javascript
organization = { name: 'Acme Gooseberries', country: 'GB' };
```

**_after_**

```javascript
class Organization {
	constructor(data) {
		this._name = data.name;
		this._country = data.country;
	}
	get name() {
		return this._name;
	}
	set name(arg) {
		this._name = arg;
	}
	get country() {
		return this._country;
	}
	set country(arg) {
		this._country = arg;
	}
}
```
