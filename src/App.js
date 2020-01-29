import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Header } from './Header';
import { SearchPage } from './SearchPage';
import 'material-design-lite/material.css';
import 'material-design-lite/material';
import { AllPokemons } from './AllPokemons';

const App = () => {
  return (
    <div style={styles.wrapper}>

      <BrowserRouter>
        <Header />
        <Route path="/listall" component={AllPokemons} />
        <Route path="/search" component={SearchPage} />
      </BrowserRouter>

    </div>
  );


}

const styles = {
  wrapper: {
    padding: "10px",
  }
}
export default App;
