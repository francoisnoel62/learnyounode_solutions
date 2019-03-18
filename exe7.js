var http = require('http');

http.get(process.argv[2], (res) => {
    res.setEncoding('utf8')
    .on('data', (data) => {
        console.log(data);
    })
    .on('error', (err) => {
        console.error(err);
    })
});

