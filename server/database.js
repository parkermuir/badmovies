const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connection()

const getAllFavorites = function(callback) {
  // get favorites from the database

};

const saveFavorite = function(movie, callback) {
  // save movie to favorites in the database
  };

const deleteFavorites = function(callback) {
  // delete a movie from favorites in the database
};

module.exports = {
  getAllFavorites,
  saveFavorite,
  deleteFavorite
};