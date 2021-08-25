import { carAdInitialState } from '../contexts/CarAdContext';
import { ICarAdCreation, ACTION_TYPE } from '../interfaces';

const carAdReducer = (state: ICarAdCreation, action: ACTION_TYPE) => {
  switch (action.type) {
    case 'HANDLE_INPUT':
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case 'GO_TO_AGREE_PAGE':
      return { ...state, currPage: 0 };
    case 'GO_TO_DETAILS_PAGE':
      return { ...state, currPage: 1 };
    case 'GO_TO_IMAGE_PAGE':
      return { ...state, currPage: 2 };
    case 'GO_TO_CONFIRMATION_PAGE':
      return { ...state, currPage: 3 };
    case 'TOGGLE_AGREE':
      return { ...state, userAgreed: !state.userAgreed };
    case 'SET_IMAGE':
      return { ...state, image: action.payload.image };
    case 'REMOVE_IMAGE':
      return { ...state, image: null, preview: null };
    case 'SET_PREVIEW':
      return { ...state, preview: action.payload.preview };
    case 'REMOVE_PREVIEW':
      return { ...state, preview: null };
    case 'RESET_AD':
      return { ...carAdInitialState, id: action.payload.id };
    default:
      return state;
  }
};

export default carAdReducer;
