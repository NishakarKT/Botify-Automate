import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FirebaseContext from "./contexts/Firebase";
import { firebase } from "./lib/Firebase";

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
