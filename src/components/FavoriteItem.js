import React from 'react';
import  { useContext } from 'react';
import { ImagesContext } from '../context/images-context';
import Item from './item';




const FavoriteItem = props => {
  
  const favoriteImages = useContext(ImagesContext).images.filter(p => p.isFavorite);

  return (
  
<ul >
        {favoriteImages.map(img => (
          <Item
            key={img.id}
            url={img.webformatURL}
            id={img.id}
            views={img.views}
            downloads={img.downloads}
          />
        ))}
      </ul>
    
  );
};

export default FavoriteItem;
