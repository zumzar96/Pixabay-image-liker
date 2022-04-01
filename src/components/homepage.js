import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
import { Fragment } from 'react';
import  { useContext } from 'react';
import { ImagesContext } from '../context/images-context';
import FavoriteItem from './FavoriteItem';
import { useNavigate } from 'react-router-dom';


const Homepage = (props) => {

    const navigate = useNavigate();
    const Images = useContext(ImagesContext).images
    const State = useContext(ImagesContext).state
  
    return (
    
        <Fragment>
      <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
        <form>
          <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
          <input onChange={e => State.setTerm(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Image Term..." />
          <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit" >
        Search
        </button>
        </div>
        </form>
          </div>
          <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit" onClick={() => navigate('/favorites')}>
        liked
        </button>
      <div className="container mx-auto">
        <h1 className="text-6xl text-center mx-auto mt-32"></h1> : <div className="grid grid-cols-3 gap-4">
          {Images.map(image => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      </div>
      
      </Fragment>
      
    );
  };
  
  export default Homepage;