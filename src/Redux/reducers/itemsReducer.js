import {ITEMS_LOADED, LOAD_FAILED, SET_FAV_ARR, SET_CART_ARR, CLEAR_CART} from "../types";

export const INITIAL_STATE = {
  items: [],
  error: null,
  favArr: localStorage.getItem("fav")
    ? JSON.parse(localStorage.getItem("fav"))
    : [],
  cartArr: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  isModalOpen: null,
};

const itemsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ITEMS_LOADED:
      return {
        ...state,
        items: action.payload,
      };
    case LOAD_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case SET_FAV_ARR:
      return {
        ...state,
        favArr: action.payload,
      };
    case SET_CART_ARR:
      return {
        ...state,
        cartArr: action.payload,
      };
    case CLEAR_CART:
      return {
        ...state,
        cartArr: []
      };

    default:
      return state;
  }
};

export { itemsReducer };
