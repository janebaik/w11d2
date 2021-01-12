import { RECEIVE_SINGLE_POKEMON } from './../actions/pokemon_actions';


const itemReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type){
     case RECEIVE_SINGLE_POKEMON:
         debugger
          return Object.assign({}, state, action.pokemon.item);
    default:
      return state;
  }
}
  
export default itemReducer;
