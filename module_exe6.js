const fs = require('fs');
const path = require('path');

let array_list = [];

module.exports = function list_file_dir(dir, ext, callback) {
    fs.readdir(dir, (err, list) => {
        if (err) {
            callback(err, null);
        } else {
            list.map((element) => {
                if (path.extname(element) === '.' + ext) {
                    array_list.push(element);
                }
            });
            callback(null, array_list);
        }
    });
};
