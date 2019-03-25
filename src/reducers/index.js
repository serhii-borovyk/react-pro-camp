import * as types from "../types";

const initialState = {
  filmList: [],
  selectedFilm: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_FILMS_FULFILLED:
      return {...state, filmList: action.payload.data.Search}
    case types.SELECT_FILM:
      return {...state, selectedFilm: action.payload}
    case types.SAVE_FILM:
      const savedFilm = action.payload
      return {...state,
        selectedFilm: null,
        filmList: state.filmList.map(e=>e.imdbID===savedFilm.imdbID ? savedFilm : e)
      }
    case types.RESET_SELECTED_FILM:
      return {...state, selectedFilm: null}
    default:
      return state;
  }
}