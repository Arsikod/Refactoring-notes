-Probably the most common approach is to provide a getting method for the collection, but make it return a copy of the underlying collection. That way, any modifications to the copy don't affect the encapsulated collection. This might cause some confusion if programmers expect the returned collection to modify the source field—but in many code bases, programmers are used to collection getters providing copies. If the collection is huge, this may be a performance issue—but most lists aren't all that big, so the general rules for performance should apply.

-Any class that's responsible for managing a collection should always give out copies—but I also get into the habit of making a copy if I do something that's liable to change a collection.

**_before_**

```javascript
class Person {
	get courses() {
		return this._courses;
	}
	set courses(aList) {
		this._courses = aList;
	}
}
```

**_after_**

```javascript
class Person {
	addCourse(aCourse) {
		this._courses.push(aCourse);
	}
	removeCourse(
		aCourse,
		fnIfAbsent = () => {
			throw new RangeError();
		}
	) {
		const index = this._courses.indexOf(aCourse);
		if (index === -1) fnIfAbsent();
		else this._courses.splice(index, 1);
	}
}
```
