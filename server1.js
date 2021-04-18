const fetch = require('node-fetch');
const fs = require("fs");
const url = 'https://jsonplaceholder.typicode.com/posts';

function jsonData(){
    return fetch(url)
    .then(res => {
        return res.json()
    })
    .then((output) => {
        let result = output;
        // console.log(result);
        let data = JSON.stringify(result, null, 2);
        fs.writeFile("./result/posts.txt", data, function (err) {
            if (err) throw err;
            console.log("JSON file created successfully");
        });
    });
}

jsonData();