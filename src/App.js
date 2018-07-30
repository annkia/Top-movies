import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import MovieCard from './components/MovieCard';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class App extends Component {
 state = { movies:[] };

    async componentDidMount(){
   // setTimeout(()=>
    //    this.setState({movies: originalMovies}), 5000);
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=41b53f3aecb5d28360372cf8a29df0fa&language=en-US&page=1');   
    const json = await response.json();
        this.setState({movies:json.results});
    }

  render() {
      const {movies}=this.state;
      
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="title" color="inherit">Title</Typography>
                </Toolbar>
            </AppBar>
            <div className="movies">
                {movies.map(movie=> <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
  }
}

export default withStyles(styles)(App);
