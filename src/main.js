import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import App from './App';

import FavoriteItem from './components/FavoriteItem';
import ImageCard from './components/ImageCard';
import Item from './components/item';


const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/favorites' element={<item/>}></Route>
    </Routes>
  );
}

export default Main;
