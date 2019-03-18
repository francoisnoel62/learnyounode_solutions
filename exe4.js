var fs = require('fs');

let content = fs.readFile(process.argv[2], (err, data) => {
    if (err) {
        console.log(err.message);
    }
    console.log(data.toString().split('\n').length -1);
});

