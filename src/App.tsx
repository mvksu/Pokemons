import React from 'react';
import "./index.css"
import DarkModeToggle from './components/DarkModeToggle';
import Filter from './components/Filter';
import Search from './components/Search';
import PokemonsList from './components/PokemonsList';
import PokemonDetail from './components/PokemonDetail';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"
          element={<>
            <div className="panel">
              <h1>Pokemons</h1>
              <DarkModeToggle />
              <Search />
              <Filter />
            </div>
            <PokemonsList /></>} />
        <Route path="/pokemon/:id" element={<PokemonDetail />}/>    
      </Routes>

    </Router>
  );
}

export default App;
