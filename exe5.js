const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], (err, list) => {
    if (err) {
        console.log(err.message);
    } else {
        list.map((element) => {
            if (path.extname(element) === '.' + process.argv[3]) {
                console.log(element);
            }
        });
    }
});

