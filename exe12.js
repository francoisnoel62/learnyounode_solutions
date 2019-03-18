var http = require('http');
const port = Number(process.argv[2]);

var server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', (data) => {
      body += data.toString(); // convert Buffer to string
    }).on('end', () => {
      res.end(body.toUpperCase());
    });
    
  }
});

server.listen(port);