import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { requestSinglePokemon } from './actions/pokemon_actions'
import {RECEIVE_SINGLE_POKEMON} from './actions/pokemon_actions'

document.addEventListener("DOMContentLoaded", () => {
  window.requestSinglePokemon = requestSinglePokemon;
  window.RECEIVE_SINGLE_POKEMON = RECEIVE_SINGLE_POKEMON;
  
  const rootEl = document.getElementById("root");
  
  const store = configureStore();
  window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={store} />, rootEl)
})