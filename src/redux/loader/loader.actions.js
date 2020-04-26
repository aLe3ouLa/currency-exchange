import LoaderActionTypes from "./loader.types";

export const setLoading = (isLoading) => ({
  type: LoaderActionTypes.SET_LOADING,
  payload: { isLoading },
});
