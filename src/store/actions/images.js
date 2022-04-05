export const TOGGLE_FAV = 'TOGGLE_FAV';
export const SET_IMAGES_LIST = 'SET_IMAGES_LIST'

export const setImages = images => {
    return { type: SET_IMAGES_LIST, payload: images,};
};
  

export const toggleFav = id => {
    return { type: TOGGLE_FAV, imageId: id };
};