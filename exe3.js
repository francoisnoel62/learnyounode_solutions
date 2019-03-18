var fs = require('fs');

let content = fs.readFileSync(process.argv[2]);
let nb_lines = content.toString().split('\n').length -1;
console.log(nb_lines);