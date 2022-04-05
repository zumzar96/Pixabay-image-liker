import { TOGGLE_FAV } from '../actions/images';
import { SET_IMAGES_LIST} from '../actions/images';


const initialState = {
  images : []
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGES_LIST: {
      return {
        ...state,
        images: action.payload,
        
      };
    }
    case TOGGLE_FAV:
      const imgIndex = state.images.findIndex(
        p => p.id === action.imageId
      );
      const newFavStatus = !state.images[imgIndex].isFavorite;
      const updatedImages = [...state.images];
      updatedImages[imgIndex] = {
        ...state.images[imgIndex],
        isFavorite: newFavStatus
      };
      return {
        ...state,
        images: updatedImages
      };
    default:
      return state;
  }
};

export default imageReducer;
