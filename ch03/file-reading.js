var fs = require('fs');

fs.readFile("foo.txt", "utf8", function ( err, data ) {
	if (err)
	{
		throw err;
	}

	console.log(data);
});

console.log("Reading file...");