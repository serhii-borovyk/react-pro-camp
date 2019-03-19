import {GET_TOP_FILMS, RESET_SELECTED_FILM, SAVE_FILM, SELECT_FILM} from "../types";


export const getTopFilms = () => ({
  type: GET_TOP_FILMS,
  payload: null
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

