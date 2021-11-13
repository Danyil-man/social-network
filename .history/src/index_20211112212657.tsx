import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./firebase";
import { Provider } from 'react-redux';
import { store } from "../../../core/store/redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider></Provider>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
