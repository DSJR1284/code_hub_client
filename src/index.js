import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';
import { BrowserRouter as Router } from 'react-router-dom'

import { rootReducer } from './reducers/rootReducer'
import App from './componets/App';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)


ReactDOM.render(
  <Provider store={store}>
    <Router>
       <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);


