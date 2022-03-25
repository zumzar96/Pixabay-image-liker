import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './App';
import ImagesProvider from './context/images-context';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.render(
  <BrowserRouter>

  <ImagesProvider>
    <App />
  </ImagesProvider>,
  </BrowserRouter>,

  document.getElementById('root')
);
