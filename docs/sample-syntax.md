Sample syntax of com.lib.js

Before:

```js
const element = document.createElement('div');
element.style.cssText = 'padding: 5px;';
element.classList.add('');
```

After: 

```js
new Lib.HTML.Build('div').style('padding: 5px').css('')
```