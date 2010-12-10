var Wick = require('../lib/wickit').Wick;
var assert = require('assert');

Wick.context("simple tests", function() {
  // a context is optional, it is purely organisational for output purposes


  Wick.it("test should pass", function() {
    assert.ok(true);
  });

  Wick.it("test should fail", function() {
    assert.ok(false);
  });
});
