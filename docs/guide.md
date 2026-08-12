Read this document before reading source code (it won't make sense otherwise.)

## 1.0 -  Syntax
The syntax for this library, follows [Grammatica]() lexica.

```md
new Object('name').args(k).args(a).args(b);
 ^    ^       ^     ^   ^
 a    b       c     d   e
```
In the grammar diagram above, we can decompose the chain of sequence. where 'a' is an optional class instantiation(if the block is an instantibable). The name of the block is 'b', and it accepts a 'c' constructor.

### 1.0.1 - Alt syntax
Rather than specifying "HTML" explicitly, we can use the wrapper to access it in cleaner syntax.

```js
Block('html').args('b').as('div')
```

## Useage
Working with the DOM (HTML) in JS is one of the most common time-consuming developer actions... it is a high priority interface which reduces an astronomiacl set of effort over time. 

The interface provided is designed to be as intuitive as (thesis?)


## Showcase
Whereas before, we define HTML elements with JS, the continuity of defintion is fragmented and unecessaringly so.

```javascript
const div = document.createElement('div');
div.setAttribute('on', true);
div.style.cssText = ``;
document.appendChild(div);
```

```javascript
new HTML('div
```
