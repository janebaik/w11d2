import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  const store = configureStore();  //this is where redux state is set up and stored in store variable
  ReactDOM.render(<Root store={store} />, rootEl)
})