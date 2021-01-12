import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './../components/pokemon/pokemon_index_container';
import { HashRouter } from "react-router-dom";
import App from './app';
// HashRouter determines which component to render based on which Route's path matches the url.
const Root = ({ store }) => (   //destructoring curly braces (we could say props.store but store is the only thing we are going to access) (same logic sugar syntax)
  <Provider store={store}>   
  {/* same thing as props.store && provider gives access to store to every child*/}
    <HashRouter>
      <App />  
        {/* <PokemonIndexContainer /> */}
    </HashRouter>
  </Provider >
);

export default Root;