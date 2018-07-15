var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();
var config = require('./config.js');
var axios = require('axios');

var apiHelpers = require('./apiHelpers.js');

app.use(bodyParser.json());

// Due to express, when you load the page, it doesn't make a get request to '/', it simply serves up the dist folder
app.use(express.static(__dirname + '/../client/dist'));

app.get('/search', function (req, res) {
  // use this endpoint to search for movies by genres, 
  // sort them by horrible votes using the search parameters in the API
  let genre = req.body.genre;
  let url = `https://api.themoviedb.org/3/discover/movie?api_key=${config.API_KEY}&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&with_genres=${genre}`;
  
  axios.get(url)
    .then((response) => {
      let results = response.data.results;
      res.send(results);
    })
    .catch((err) => console.error(err));

});

app.get('/genres', function (req, res) {
  // make an axios request to get the list of official genres and send back
  let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${config.API_KEY}&language=en-US`
  axios.get(url)
    .then((response) => {
      let genres = response.data.genres;
      res.send(genres);
    })
    .catch(err => console.error(err));
});

app.post('/save', function(req, res) {

});

app.post('/delete', function(req, res) {

});

app.listen(3000, function() {
  console.log('listening on port 3000...');
});
