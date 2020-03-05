import React from 'react';

// if (process.env.NODE_ENV === 'development') {
//   const whyDidYouRender = require('@welldone-software/why-did-you-render');
//   whyDidYouRender(React, {
//     trackAllPureComponents: true,
//   });
// }

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { checkSavedSettings } from './utils';

import rootReducer from './redux/rootReducer';
import defaultOptions from './redux/initialState';

import App from './App';

checkSavedSettings(defaultOptions);
const store = createStore(rootReducer, checkSavedSettings(defaultOptions),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
