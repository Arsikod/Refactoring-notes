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
function playFor(aPerformance) {
	return plays[aPerformance.playID];
}

const play = playFor(perf.playID); //then replace all the local play variables with function
```
