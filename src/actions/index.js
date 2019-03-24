import { GET_FILMS_ERROR, GET_FILMS_SUCCESS, RESET_SELECTED_FILM, SAVE_FILM, SELECT_FILM } from "../types";
import axios from 'axios';


export const getFilms = () => async dispatch => {
  try {
    const films = await axios.get('http://www.omdbapi.com/?apikey=792db8bc&s=marvel');
    dispatch({
      type: GET_FILMS_SUCCESS,
      payload: films.data.Search
    })
  } catch (err) {
    dispatch({
      type: GET_FILMS_ERROR,
      payload: err.response.data
    })
  }
}

export const selectFilm = selectedFilm => ({
  type: SELECT_FILM,
  payload: selectedFilm
})

export const saveFilm = savedFilm => ({
  type: SAVE_FILM,
  payload: savedFilm
})

export const resetSelectedFilm = () => ({
  type: RESET_SELECTED_FILM,
})

