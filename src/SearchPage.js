import React, { useState } from 'react';
import { Pokemon } from './Pokemon';
import { Search } from './Search';

export const SearchPage = (props) => {
  const [pokemon, setPokemon] = useState({ sprites: {} });
  console.log('pokemon is', pokemon);

  return (
    <div style={styles.wrapper}>
      <Search fetchPokemon={fetchPokemon} />
      {pokemon.name ? <Pokemon pokemon={pokemon} /> : null}
    </div>
  )

  function fetchPokemon(searchString) {
    const url = `https://pokeapi.co/api/v2/pokemon/${searchString}`;
    fetch(url)
      .then(res => res.json())
      .then(thePokemon => setPokemon(thePokemon))
      .catch(error => console.error(`Oh noes! ${error}`));
  }
}

const styles = {
  wrapper: {
    padding: "10px",
    margin: "10px",
  }
}