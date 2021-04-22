With the copy, I can gradually change references from the old name to the new name. When I'm done, I remove the copy. I prefer to declare the new name and copy to the old name if it makes it a tad easier to remove the old name and put it back again should a test fail.

**_before_**

```javascript
const cpyNm = "Acme Gooseberries";
```

**_after_**

```javascript
const companyName = "Acme Gooseberries";
const cpyNm = companyName;
```
