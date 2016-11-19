'use strict';

function deepPluckRef(obj, findProps) {
	if(!obj) return undefined;
	if(!findProps) return undefined;
	if(typeof findProps.forEach !== 'function') return undefined;
	var results = [];
	function recurse(o) {
		var ref = o;
		Object.keys(o).forEach(function keysForEachCb(m) {
			~findProps.indexOf(m) && !~results.indexOf(ref) && results.push(ref);
			typeof o[m] === 'object' && recurse(o[m]);
		});
	}
	recurse(obj);
	return results;
}

module.exports = deepPluckRef;
