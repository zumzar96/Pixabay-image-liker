export const TOGGLE_FAV = "TOGGLE_FAV";
export const SET_IMAGES_LIST = "SET_IMAGES_LIST";
export const SET_MODAL = "SET_MODAL"

export const setImages = (images) => {
  return { type: SET_IMAGES_LIST, payload: images };
};

export const toggleFav = (id) => {
  return { type: TOGGLE_FAV, imageId: id };
};

export const setModal = (modalIsShown) => {
    return { type: SET_MODAL, payload: modalIsShown };
};
