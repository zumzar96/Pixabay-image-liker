import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './App';
import ImagesProvider from './context/images-context';



ReactDOM.render(
  

  <ImagesProvider>
    <App />
  </ImagesProvider>,

  document.getElementById('root')
);
