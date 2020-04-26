import LoaderActionTypes from "./loader.types";

const INITIAL_STATE = {
  isLoading: true,
};

const loaderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoaderActionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    default:
      return state;
  }
};

export default loaderReducer;
