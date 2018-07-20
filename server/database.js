const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAllFavorites = function(callback) {
  // get favorites from the database
  let query = `SELECT * FROM favorites`

  connection.query(query, (err, response) => {
    if (err) {
      callback(err)
    } else {
      callback(null, response);
    }
  })

};

const saveFavorite = function(movie, callback) {
  // save movie to favorites in the database
  console.log(movie);
  let { id, title, vote_average, vote_count, poster_path, backdrop_path, release_date } = movie;
  var query = `INSERT INTO favorites (id, title, vote_average, vote_count, poster_path, backdrop_path, release_date) VALUES (${id}, '${title}', ${vote_average}, ${vote_count}, '${poster_path}', '${backdrop_path}', '${release_date}')`

  connection.query(query, (err, response) => {
    if (err) {
      console.log('sql error', err)
      callback(err)
    } else {
      callback(null, response)
    }
  })  
};

const deleteFavorites = function(id, callback) {
  // delete a movie from favorites in the database
  var query = `DELETE FROM favorites WHERE id = ${id}`
  console.log('id= ', id)
  connection.query(query, (err, success) => {
    if (err) {
      console.log('database error', error)
    } else {
      callback(null, success)
    }
  })
};

module.exports = {
  getAllFavorites,
  saveFavorite,
  deleteFavorites
};