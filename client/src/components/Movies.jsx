import React from 'react';

class Movies extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(index) {
    console.log(index);
    if (this.props.showFaves) {
      //delete from favorites
    } else if (!this.props.showFaves) {
      //add to favorites
    }
  }
  // Make an onClick for each list item. If the movies shown is the search results, 
  // onClick add it to the database (do it in the main app, and pass down the function)

  // If you're currently showing the fave list, delete the movie instead
  // You can tell which list is currently being rendered based on whether the prop "showFaves" is false (search results) or true (fave list) (within index.jsx)

  render() {
    if (this.props.movies.length === 0) {
      return <ul></ul>;
    }

    return (
      <ul className="movies" >
        {/* Make this list dynamic! */}
        {this.props.movies.map((movie, index) => {
          return (
            <li key={movie.id} onClick={() => this.onClick(index)} value={index} className="movie_item">
              <img src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} />
              <div className="movie_description">
                <h2>{movie.original_title}</h2>
                <section className="movie_details">
                  <div className="movie_year">
                    <span className="title">Year</span>
                    <span>{movie.release_date}</span>
                  </div>
                  <div className="movie_rating">
                    <span className="title">Rating</span>
                    <span>{movie.popularity}</span>
                  </div>
                </section>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Movies;