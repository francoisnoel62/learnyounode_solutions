var axios = require('axios');

axios.get(process.argv[2])
    .then((res) => {
        console.log(res.data);
        return axios.get(process.argv[3]);
    }).then((res) => {
        console.log(res.data);
        return axios.get(process.argv[4]);
    }).then((res) => {
        console.log(res.data);
    })

