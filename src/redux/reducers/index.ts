import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
const rootReducers = combineReducers({
  user, // cuidado com shorthand
  wallet, // cuidado com o shorthand
});

export default rootReducers;
// () => {};  delete essa linha e configure os seus reducers
