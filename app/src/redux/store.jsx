import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import PropTypes from 'prop-types';

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
DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DataProvider;
