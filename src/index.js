import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/app/App.js"
import CardA from './components/card-class/CardA.js';
import CardB from './components/card-function/CardB.js';

const app = document.getElementById('app')
const main = ReactDOM.createRoot(app)
//display page
main.render(
  <div>
    <h1>Welcome to React</h1>
    <App/>
    <CardA/>
    <CardB role="DevOps Engineer" name="Albert" image="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-female-battle-royale-flaticons-lineal-color-flat-icons.png"/>
  </div>
)

/*
import './index.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/