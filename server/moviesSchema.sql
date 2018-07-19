-- SET UP SCHEMA HERE

DROP DATABASE IF EXISTS badmovies;
CREATE DATABASE badmovies;

USE badmovies;

CREATE TABLE favorites(
    id INT(20) NOT NULL,
    title varchar(240),
    vote_average INT(20),
    vote_count INT(20),
    poster_path varchar(240),
    backdrop_path varchar(200),
    overview varchar(1000),
    release_date varchar(200),
    PRIMARY KEY (id)
)

/*

source server/moviesSchema.sql

drop database <dbname>

show tables; <-- shows you which tables exist
describe <tablename>; <-- shows you table schema
select * from <tablename>; <-- shows you what's inside table

let sqlString = insert into (poster, movie, id, rating) values (?, ?, ?, ?)
let params = [req.body.poster, req.body.movie, req.body.id, req.body.rating]
db.query(sqlString, params, (err, data))

*/