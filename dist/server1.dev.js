"use strict";

var fetch = require('node-fetch');

var fs = require("fs");

var url = 'https://jsonplaceholder.typicode.com/posts';

function jsonData() {
  return fetch(url).then(function (res) {
    return res.json();
  }).then(function (output) {
    var result = output; // console.log(result);

    var data = JSON.stringify(result, null, 2);
    fs.writeFile("./result/posts.txt", data, function (err) {
      if (err) throw err;
      console.log("JSON file created successfully");
    });
  });
}

jsonData();