const request = require('request');
const axios = require('axios');
const { API_KEY } = require('../server/config.js');

// write out logic/functions required to query TheMovieDB.org

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover

// Don't forget to export your functions and require them within your server file

var searchByGenre = ({genre}) => {
  let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&with_genres=${genre}`;
  return axios.get(url)
    .then((response) => {
      return results = response.data.results;
    })
    .catch((err) => console.error(err));
};

module.exports.searchByGenre = searchByGenre;