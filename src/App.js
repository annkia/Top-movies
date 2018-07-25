import React, { Component } from 'react';
import './App.css';

import MovieCard from './components/MovieCard'
//tworzymy zmienną, któa będzie przechowywała Movie object
//chcę to przekazac do MovieCard
//Movie card ma wyswietlac info o filmach wiec uzyjemy wlasciwosci 'movie'

const starWars={id:1,title:'Star Wars'};
const movies=[
    {id:1, title: 'Star Wars'},
    {id:2, title: 'Star Trek'},
    {id:3, title: 'Blade Runner'},
];
//wykorzystamy funkcje mapująca do tablic z js

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map(movie=> <MovieCard key={movie.id} movie={movie} />)}
      </div>
    );
  }
}

export default App;
