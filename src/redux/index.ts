import { composeWithDevTools } from '@redux-devtools/extension';
import { legacy_createStore as createStore } from 'redux';
import rootReducers from './reducers';

const store = createStore(rootReducers, composeWithDevTools());
if (window.Cypress) {
  window.store = store;
}

export default store;
