//
// Module to test the uwzWarning function
// using node.js
//
var fs = require('fs');
var vm = require('vm');
fs.readFile(__dirname + '/testdata/plz-69429-yellow.html', function(err, data) {
	if (err) throw err;
	input = data;
	var code = fs.readFileSync('uwzWarning.js' + '');
	vm.runInThisContext(code, 'uwzWarning.js' + '');
});

