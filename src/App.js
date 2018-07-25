import React, { Component } from 'react';
import './App.css';

import MovieCard from './components/MovieCard'
//tworzymy zmienną, któa będzie przechowywała Movie object
//chcę to przekazac do MovieCard
//Movie card ma wyswietlac info o filmach wiec uzyjemy wlasciwosci 'movie'
const starWars={id:1,title:'Star Wars'};

class App extends Component {
  render() {
    return (
      <div className="App">
       <MovieCard movie={starWars}/>
      </div>
    );
  }
}

export default App;
