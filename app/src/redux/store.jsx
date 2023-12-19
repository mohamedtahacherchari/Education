import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
  : applyMiddleware(thunk);

const store = createStore(rootReducer, composedEnhancer);

function DataProvider({ children }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

export default DataProvider;
