import {GET_TOP_FILMS} from "../types";
import {filmList} from "../store";


export const getTopFilms = () => ({
  type: GET_TOP_FILMS,
  payload: null
})

