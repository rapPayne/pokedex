import React, { useState, useEffect } from 'react';
import { Pokemon } from './Pokemon';

export const AllPokemons = props => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemon, setPokemon] = useState();
  const [searchString, setSearchString] = useState("");
  useEffect(() => {
    console.log("fetching all pokes")
    fetchPokemonList();
  }, []);
  //console.log("All pokemon", pokemonList);
  return (
    <div>
      <h1>All Pokemons</h1>
      <div className="mdl-textfield mdl-js-textfield">
        <input type="search" onChange={e => setSearchString(e.target.value)} className="mdl-textfield__input" id="searchString" autoComplete="off" />
        <label className="mdl-textfield__label" htmlFor="searchString">Pokemon name</label>
      </div>
      <div style={styles.listAndDetail} className="listAndDetail">
        <section className="mdl-card mdl-shadow--8dp pokeList" style={styles.pokeList}>
          <ul className="demo-list-item mdl-list">

            {
              pokemonList
                .filter(pokemon => pokemon.name.includes(searchString))
                .sort((a, b) => a.name > b.name ? 1 : -1)
                .map(pokemon =>
                  <li onClick={() => fetchPokemon(pokemon.name)} key={pokemon.name} className="mdl-list__item">
                    <span className="mdl-list__item-primary-content">
                      {pokemon.name}
                    </span>
                  </li>
                )
            }

          </ul>
        </section>
        {pokemon ?
          <Pokemon pokemon={pokemon} /> : null}
      </div>
    </div>
  )

  function fetchPokemonList() {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=2000`)
      .then(res => res.json())
      //.then(x => {console.log(x);return x})
      .then(res => res.results)
      .then(pokemons => setPokemonList(pokemons))
      .catch(error => console.error("Error getting Pokemonlist:", error))
  }

  function fetchPokemon(searchString) {
    const url = `https://pokeapi.co/api/v2/pokemon/${searchString}`;
    fetch(url)
      .then(res => res.json())
      .then(thePokemon => setPokemon(thePokemon))
      .catch(error => console.error(`Oh noes! ${error}`));
  }

  // async function fetchAllPokemon() {
  //   const pokes = [];
  //   const pokemonList = await fetch(`https://pokeapi.co/api/v2/pokemon`)
  //     .then(res => res.json())
  //     .catch(error => console.error("Error fetching all Pokemon: ", error));
  //   try {
  //     await Promise.all(pokemonList.results.map(pokemon => fetch(pokemon.url).then(res => res.json()).then(pokemon => pokes.push(pokemon))))
  //     //setPokemons(pokes);
  //   } catch (error) {
  //     console.error('Error fetching the pokemon themselves', error);
  //   }
  // }
}

const styles = {
  wrapper: {
    padding: "10px",
    margin: "10px",
  },
  listAndDetail: {
    display: 'flex',
  },
  pokeList: {
    height: "90vh",
    overflowY: "scroll",
    margin: "10px",
  },
}