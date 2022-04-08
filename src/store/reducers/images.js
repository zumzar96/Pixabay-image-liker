import { TOGGLE_FAV } from "../actions/images";
import { SET_IMAGES_LIST } from "../actions/images";
import { SET_MODAL } from "../actions/images";

const initialState = {
  images: [],
  modalIsShown: false,
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGES_LIST: {
      return {
        ...state,
        images: action.payload,
      };
    };
    case SET_MODAL: {
      return {
        ...state,
        modalIsShown: action.payload,
      };
    };  
    case TOGGLE_FAV:
      const imgIndex = state.images.findIndex((p) => p.id === action.imageId);
      const newFavStatus = !state.images[imgIndex].isFavorite;
      const updatedImages = [...state.images];
      updatedImages[imgIndex] = {
        ...state.images[imgIndex],
        isFavorite: newFavStatus,
      };
      return {
        ...state,
        images: updatedImages,
      };
    default:
      return state;
  }
};

export default imageReducer;
