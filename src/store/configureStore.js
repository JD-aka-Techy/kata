import { createStore } from 'redux';
import rootReducer from '../reducers';

/*
function configureStore(preLoadedState) {
  const store = createStore(rootReducer, preloadedState)

  if(module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').defualt;
      store.replaceReducer(nextReducer)
    });
  }

  return store;

}*/
function configureStore() {
  const store = createStore(rootReducer);
  return store;
}

export default configureStore;
