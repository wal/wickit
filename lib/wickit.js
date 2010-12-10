var utils = require('utils');

Wick = {
  passed: 0,
  failed: 0,

  it: function(name, block){
    utils.print("[ " + name + " ]\t");
    try {
      block();
      utils.puts("PASS");
      Wick.passed += 1;
    } catch(error) {
      utils.puts("FAIL " + error.stack);
      Wick.failed += 1;
    }
  }
};

exports.Wick = Wick;

process.on('exit', function (code) {
  utils.puts(" \n-------\n");
  utils.puts("" + Wick.passed + " passed, " + Wick.failed + " failed");
  utils.puts("\n\n");
});

