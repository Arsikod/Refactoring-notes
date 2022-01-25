-One of the keys—if not the key—to good modular design is encapsulation. Encapsulation means that modules need to know less about other parts of the system. Then, when things change, fewer modules need to be told about the change—
which makes the change easier to make.

**_before_**

```javascript
class Person {
	get department() {
		return this._department;
	}
	set department(arg) {
		this._department = arg;
	}
}
class Department {
	get manager() {
		return this._manager;
	}
	set manager(arg) {
		this._manager = arg;
	}
}

//client code…
const manager = aPerson.department.manager;
```

**_after_**

```javascript
class Person {
	//...
	get manager() {
		return this._department.manager;
	}
}

//client code…
const manager = aPerson.manager;
```
