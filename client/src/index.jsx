import React from 'react';
import ReactDOM from 'react-dom';
// import AnyComponent from './components/filename.jsx'
import Search from './components/Search.jsx';
import Movies from './components/Movies.jsx';
var axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      favorites: [],
      showFaves: true,
    };

    // you might have to do something important here!
    this.swapFavorites = this.swapFavorites.bind(this);
    this.getMovies = this.getMovies.bind(this);
    this.getFavorites = this.getFavorites.bind(this);
  }

  getMovies(input) {
    // make an axios request to your server on the GET SEARCH endpoint
    axios.get('/search', {params: {genre: input}})
      .then((response) => {
        this.setState({movies: response.data});
        console.log('STATE of Movies; ', this.state.movies);
      })
      .catch(err => console.log('error in getMovies: ', err));
  }

  getFavorites() {
    axios.get('/favorites')
      .then((response) => {
        console.log(response.data)
        this.setState({movies: response.data})
      })
      .catch(err => console.log('error in getfavs ', err))
  }

  saveMovie() {
    // same as above but do something diff
  }

  deleteMovie() {
    // same as above but do something diff
  }

  swapFavorites() {
  //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });

    

    if (this.state.showFaves !== true) {
      this.getFavorites()
    }
  }

  render() {
    return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header>
        <div className="main">
          <Search swapFavorites={this.swapFavorites} showFaves={this.state.showFaves} getMovies={this.getMovies} />
          <Movies movies={this.state.showFaves ? this.state.favorites : this.state.movies} showFaves={this.state.showFaves} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));