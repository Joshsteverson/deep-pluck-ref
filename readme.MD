
# Deep Pluck Ref

### Contextual Deep Pluck

Deep pluck ref finds the desired properties and plucks the parent object reference.


# Installation
```sh
$ npm install deep-pluck-ref
```
# Usage
```javascript
import deepPluckRef from 'deep-pluck-ref';

const obj = {
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
const results = deepPluckRef(obj, ['value']);
// [ { ref: { thing: 'one', value: 'thing one value' } }, 
// { ref: { thing: 'two', value: 'thing two value' } } ]

```