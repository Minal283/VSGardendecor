import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './stores/reducer'
import { BrowserRouter } from 'react-router-dom';




const store = createStore(reducer, applyMiddleware(thunk))
console.log(reducer)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

