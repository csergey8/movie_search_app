var express = require('express');
var app = express();

var request = require('request');

app.set("view engine", "ejs");


app.get('/results', function (req, res) {
    request('https://api.themoviedb.org/3/search/movie?api_key=3a43095834b5efde84c82ba5c77460f0&language=en-US&query=big&page=1&include_adult=false', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log('status ok');
            var result = JSON.parse(body);
            res.render('results', {
                data: result
            });
        } else {
            console.log(error);
            res.send('Error');
        }
    });
});

app.get('/', function (req, res) {
    res.send('OK');
});

app.listen(3000, "127.0.0.1", function () {
    console.log("Server starts..");
});
