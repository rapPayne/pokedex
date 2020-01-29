import React from 'react';

export const Pokemon = (props) => {
  const pokemon = props.pokemon || { sprites: {} };

  return (
    <div className="mdl-card mdl-shadow--8dp" style={styles.wrapper}>
      <div className="mdl-card__title">
        <h2 className="mdl-card__title-text">{pokemon.name}</h2>
      </div>
      <div className="mdl-card__body">
        <p style={styles.weight}>Weight: {pokemon.weight}</p>
        {pokemon.sprites.front_default && <img src={pokemon.sprites.front_default} alt={pokemon.name} />}
        {pokemon.sprites.front_shiny && <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />}
        {pokemon.sprites.front_female && <img src={pokemon.sprites.front_female} alt={pokemon.name} />}
        {pokemon.sprites.front_female_shiny && <img src={pokemon.sprites.front_female_shiny} alt={pokemon.name} />}
        {pokemon.sprites.back_default && <img src={pokemon.sprites.back_default} alt={pokemon.name} />}
        {pokemon.sprites.back_shiny && <img src={pokemon.sprites.back_shiny} alt={pokemon.name} />}
        {pokemon.sprites.back_female && <img src={pokemon.sprites.back_female} alt={pokemon.name} />}
        {pokemon.sprites.back_female_shiny && <img src={pokemon.sprites.back_female_shiny} alt={pokemon.name} />}
      </div>
    </div>
  )
}

const styles = {
  wrapper: {
    padding: "10px",
    margin: "10px",
  },
  weight: {
    fontWeight: "bold",
  }
}