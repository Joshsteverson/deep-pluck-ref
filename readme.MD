
# Deep Pluck Ref

### Contextual Deep Pluck

Deep pluck ref finds the desired properties and plucks the parent object reference.


# Installation
```sh
$ npm install deep-pluck-ref
```
# Usage
```javascript
var deepPluckRef = require('deep-pluck-ref');
var obj = {
	do: {
		all: {
			the: {
				things: [
					{
						thing: 'one',
						value: 'thing one value'
					},
					{
						thing: 'two',
						value: 'thing two value'
					},
					{
						thing: 'three'
					}
				]
			}
		}
	}
};
var results = deepPluckRef(obj, ['value']);
console.log(result);
// [ { ref: { thing: 'one', value: 'thing one value' } }, 
// { ref: { thing: 'two', value: 'thing two value' } } ]
```