var http = require('http');
var bl = require('bl');

http.get(process.argv[2], (res) => {
    res.pipe(bl((err, data) => {
        if (err) {
            return console.error(err);
        }
         console.log(data.length);
         console.log(data.toString());
    }));
});

