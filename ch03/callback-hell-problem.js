var fs = require('fs');

var fileName = "foo.txt";

fs.exists(fileName, function ( exists ) {
	if (exists)
	{
		fs.stat(fileName, function ( err, stats ) {
			if (err)
			{
				throw err;
			}

			if (stats.isFile())
			{
				fs.readFile(fileName, "utf8", function ( err, data ) {
					if (err)
					{
						throw err;
					}

					console.log(data);
				});
			}
		});
	}
});