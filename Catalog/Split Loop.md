-if you're doing two different things in the same loop, then whenever you need to modify the loop you haveto understand both things. By splitting the loop, you ensure you only need to understand the behavior you need to modify.

**_before_**

```javascript
let averageAge = 0;
let totalSalary = 0;
for (const p of people) {
	averageAge += p.age;
	totalSalary += p.salary;
}
averageAge = averageAge / people.length;
```

**_after_**

```javascript
let totalSalary = 0;
for (const p of people) {
	totalSalary += p.salary;
}

let averageAge = 0;
for (const p of people) {
	averageAge += p.age;
}
averageAge = averageAge / people.length;
```
