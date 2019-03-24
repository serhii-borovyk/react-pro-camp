import { GET_FILMS, RESET_SELECTED_FILM, SAVE_FILM, SELECT_FILM } from "../types";
import axios from 'axios';


export const getFilms = () => ({
  type: GET_FILMS,
  payload: axios.get('https://www.omdbapi.com/?apikey=792db8bc&s=marvel')
})

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

