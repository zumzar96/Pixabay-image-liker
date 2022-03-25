import React, { useState, useEffect } from 'react';


export const ImagesContext = React.createContext({
  images: [],
  toggleFav: (id) => {},
  term: "",
  setTerm: () => {}
});

export default props => {
  const [fetchImages, setFetchImages] = useState([]);


  const setTerm = (term) => {
    setState({...state, term: term})
  }

  const initState = {
    term: "",
    setTerm: setTerm
  } 

  const [state, setState] = useState(initState);

    
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${state}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setFetchImages(data.hits)
      })
      .catch(err => console.log(err))
      setImagesList(fetchImages)
      imagesList.map(image => (
        image.isFavorite = false))
  }, [state]);

  const [imagesList, setImagesList] = useState(fetchImages);
    




  

  

  const toggleFavorite = imageId => {
    setImagesList(currentImagesList => {
      const imageIndex = currentImagesList.findIndex(p => p.id === imageId);
      const newFavStatus = !currentImagesList[imageIndex].isFavorite;
      const updatedImages = [...currentImagesList];
      updatedImages[imageIndex] = {
        
        ...currentImagesList[imageIndex],
        isFavorite: newFavStatus
      };
      return updatedImages;
    });
  };

  return (
    <ImagesContext.Provider
      value={{state, images: imagesList, toggleFav: toggleFavorite }}
    >
      {props.children}
    </ImagesContext.Provider>
  );
};
