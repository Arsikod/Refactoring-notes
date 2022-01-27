-If I find a clearer way to do something, I replace the complicated way with the clearer way. Refactoring can break down something complex into simpler pieces, but sometimes I just reach the point at which I have to remove the whole algorithm and replace it with something simpler.

**_before_**

```javascript
function foundPerson(people) {
	for (let i = 0; i < people.length; i++) {
		if (people[i] === 'Don') {
			return 'Don';
		}
		if (people[i] === 'John') {
			return 'John';
		}
		if (people[i] === 'Kent') {
			return 'Kent';
		}
	}
	return '';
}
```

**_after_**

```javascript
function foundPerson(people) {
	const candidates = ['Don', 'John', 'Kent'];
	return people.find(p => candidates.includes(p)) || '';
}
```
