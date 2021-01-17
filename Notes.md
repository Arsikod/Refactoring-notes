# Refactoring by M.Fowler

## Chapter 1

_p.14_ The great benefit of removing **local** variables is that it makes it much easier to do extractions,
since there is less local scope to deal with.

**_before_**

```javascript
const play = plays[perf.playID];
```

**_after_**

```javascript
//name function that ends with "For" to make bind with parameter more obvious
function playFor(aPerformance) {
	return plays[aPerformance.playID];
}

const play = playFor(perf.playID); //then replace all of the local "play" variables with function
```
