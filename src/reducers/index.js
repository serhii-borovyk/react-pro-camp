import * as types from "../types";
import {filmList} from "../store";

const initialState = {
  filmList,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TOP_FILMS:
      return {...state, filmList: action.payload}
    default:
      return state;
  }
}