var listdir = require('./module_exe6.js');

listdir(process.argv[2], process.argv[3], (err, data) => {
    if (err) {
        console.log(err.message);
    } else {
        if (data.length === 0) {
            console.log('Il n\'y a pas de fichiers de ce type dans ce dossier');
        } else {
            data.forEach(element => {
                console.log(element);
            });
        }
    }
});