
'use strict';

require('chai').should();
var deepPluckRef = require('../index');


describe('Module tests', function describeCb() {

	it('plucks values within array', function itCb(done) {
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
		results.length.should.equal(2);
		const valuesPresent = results.every(r => (typeof r.value).should.equal('string'));
		valuesPresent.should.equal(true);
		done();
	});

	it('returns undefined when obj param is null.', function itCb(done) {
		var obj = null;
		var results = deepPluckRef(obj, ['prop']);
		(typeof results).should.equal('undefined');
		done();
	});

	it('returns undefined when obj param is undefined.', function itCb(done) {
		var obj = undefined;
		var results = deepPluckRef(obj, ['prop']);
		(typeof results).should.equal('undefined');
		done();
	});

	it('returns undefined when obj param is string.', function itCb(done) {
		var obj = '';
		var results = deepPluckRef(obj, ['prop']);
		(typeof results).should.equal('undefined');
		done();
	});

	it('returns undefined when findProps param is string.', function itCb(done) {
		var obj = {};
		var results = deepPluckRef(obj, 'prop');
		(typeof results).should.equal('undefined');
		done();
	});

	it('returns undefined when findProps param is not array.', function itCb(done) {
		var obj = {};
		var results = deepPluckRef(obj, undefined);
		(typeof results).should.equal('undefined');
		done();
	});

});
