import logo from './logo.png';

import pokedex from './Pokedex.js';
import Pokecard from './Pokecard.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className="App-pokedex">
        {pokedex.map((pokemon) => (
          <Pokecard
            name={pokemon.name}
            imgId={pokemon.id}
            type={pokemon.type}
            xp={pokemon.base_experience}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
