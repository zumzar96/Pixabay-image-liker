import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import { Fragment } from 'react';
import  { useContext } from 'react';
import { ImagesContext } from './context/images-context';
import FavoriteItem from './components/FavoriteItem';
import Homepage from './components/homepage';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';




function App() {
  

  

  return (
    <main style={{ padding: "1rem 0" }}>

    

      <BrowserRouter>
      
      <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route path="/" element={<Homepage />} />  
      <Route  path='/favorites' element={<FavoriteItem/>}></Route>
    </Routes>
      
    
      </BrowserRouter>
    </main>

  );
}

export default App;
