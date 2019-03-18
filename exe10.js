const net = require('net');

const fillZero = (date) => {
    return (date < 10 ? '0' : '') + date;
}

const date = new Date();
const data = `${date.getFullYear()}-${fillZero(date.getMonth())}-${fillZero(date.getDate())} ${fillZero(date.getHours())}:${fillZero(date.getMinutes())}`;

const server = net.createServer((socket) => {
    socket.end(data + '\n');
});

server.listen(Number(process.argv[2] || 3000));