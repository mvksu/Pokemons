import React from 'react';
import "./index.css"
import DarkModeToggle from './components/DarkModeToggle';
import Filter from './components/Filter';
import Search from './components/Search';
import PokemonsList from './components/PokemonsList';


function App() {
  return (
    <>
    <div className="panel">
      <h1>Pokemons</h1>
      <DarkModeToggle />
      <Search />
      <Filter />
    </div>
    <PokemonsList/>
    </>
  );
}

export default App;
