-Software often involves feeding data into programs that calculate various derived information from it. These derived values may be needed in several places, and those calculations are often repeated wherever the derived data is used. I prefer to bring all of these derivations together, so I have a consistent place to find and update them and avoid any duplicate logic.

-When I'm applying a transformation that produces essentially the same thing but with additional information, I like to name it using "enrich". If it were producing something I felt was different, I would name it using "transform".

**_before_**

```javascript
function base(aReading) {...}
function taxableCharge(aReading) {...}
```

**_after_**

```javascript
function enrichReading(argReading) {
	const aReading = _.cloneDeep(argReading);
	aReading.baseCharge = base(aReading);
	aReading.taxableCharge = taxableCharge(aReading);
	return aReading;
}
```
