var Wick = require('../lib/wickit').Wick;
var assert = require('assert');

Wick.it("test should pass", function() {
  assert.ok(true);
});

Wick.it("test should fail", function() {
  assert.ok(false);
});

