Problems occur when the variable has a wider scope than just a single function. There may be a lot of references all over the code base:

```javascript
let tpHd = "untitled";
```

Some references access the variable:

```javascript
result += `<h1>${tpHd}</h1>`;
```

Others update it:

```javascript
tpHd = obj["articleTitle"];
```

### Encapsulation method

With the copy, I can gradually change references from the old name to the new name. When I'm done, I remove the copy. I prefer to declare the new name and copy to the old name if it makes it a tad easier to remove the old name and put it back again should a test fail.

**_before_**

```javascript
let tpHd = "untitled";
```

**_after_**

```javascript
let _title = "untitled";
function title() {
  return _title;
}
function setTitle(arg) {
  _title = arg;
}
```

### Renaming method

**_before_**

```javascript
const cpyNm = "Acme Gooseberries";
```

**_after_**

```javascript
const companyName = "Acme Gooseberries";
const cpyNm = companyName;
```
