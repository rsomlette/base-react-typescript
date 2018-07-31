import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { rootEpic } from './RootEpic';
// import Services from '../Services';
import { rootReducer } from './RootReducer';
import { composeEnhancers } from './utils';
// import { composeEnhancers } from './utils';

// const epicMiddleware = createEpicMiddleware();

function configureStore(initialState?: object) {
  // configure middlewares
  const epicMiddleware = createEpicMiddleware();
  const middlewares = [epicMiddleware];
  // // compose enhancers
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  // // create store
  const storeInstance = createStore(rootReducer, initialState!, enhancer);

  // const storeInstance = createStore(rootReducer, applyMiddleware(epicMiddleware));

  epicMiddleware.run(rootEpic);

  return storeInstance;
}

export const store = configureStore();
