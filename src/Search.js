import React, { useState } from 'react';

export const Search = (props) => {
  const { fetchPokemon } = props;
  const [searchString, setSearchString] = useState("");
  return (
    <div className="mdl-card mdl-shadow--8dp" style={styles.wrapper}>
      <div className="mdl-textfield mdl-js-textfield">
        <input type="search" onChange={e => setSearchString(e.target.value)} className="mdl-textfield__input" id="searchString" />
        <label className="mdl-textfield__label" htmlFor="searchString">Pokemon</label>
      </div>
      <div className="mdl-card__actions mdl-card--border">
        <button onClick={e => fetchPokemon(searchString)} className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Search</button>
      </div>
    </div>
  )
}

const styles = {
  wrapper: {
    padding: "10px",
    margin: "10px",
  }
}