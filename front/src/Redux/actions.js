import axios from 'axios'

export const ADD_FAVORITE="ADD_FAVORITE"
export const DELETE_FAVORITE="DELETE_FAVORITE"
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_FAVORITES = "GET_FAVORITES";

export const addFavorite=(character)=>{
    return {
        type:ADD_FAVORITE,
        payload: character
    }
}

export const deleteFavorite=(id)=>{
    return {
        type:DELETE_FAVORITE,
        payload:id
    }
}

export const getFavorites = () => {
    return async function (dispatch) {
      const URL_BASE = "http://localhost:3001/rickandmorty/fav";
      const response = await axios.get(URL_BASE);
      dispatch({ type: GET_FAVORITES, payload: response.data });
    };
  };


export const cleanDetail = () => {
    return { type: CLEAN_DETAIL };
  };