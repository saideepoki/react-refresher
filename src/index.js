import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import Counter from './Counter'
import Fetch from './Fetch';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App hello = "hello" print = "This is Saideep"/>
    <Counter/>
    <Fetch/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
