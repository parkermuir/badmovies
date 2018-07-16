import React from 'react';
var axios = require('axios');

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      selected: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getGenres();
  }

  handleChange(e) {
    this.setState({selected: e.target.value});
  }

  getGenres() {
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
    axios.get('/genres')
      .then((response) => {
        this.setState({genres: response.data});
      });
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => { this.props.swapFavorites(); }}>{this.props.showFaves ? 'Show Results' : 'Show Favorites'}</button>
        <br/><br/>

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}

        <select value ={this.state.selected} onChange={this.handleChange}>
          {this.state.genres.map((genre, index) => {
            return <option key= {genre.id / index} value={genre.id}>{genre.name}</option>;
          })}
        </select>
        <br/><br/>

        <button onClick={() => this.props.getMovies(this.state.selected)}>Search</button>

      </div>
    );
  }
}

export default Search;