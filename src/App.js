import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import { Fragment } from 'react';
import  { useContext } from 'react';
import { ImagesContext } from './context/images-context';
import FavoriteItem from './components/FavoriteItem';
import Main from './main'
import Homepage from './components/homepage';




function App() {
  

  

  return (
    <Fragment>
      
      <Homepage></Homepage>
    
    </Fragment>
  );
}

export default App;
