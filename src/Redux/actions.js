import {
    ITEMS_LOADED,
    LOAD_FAILED,
    ADD_MODAL,
    DEL_MODAL,
    HIDE_MODAL,
    SET_FAV_ARR,
    SET_CART_ARR,
    SET_AGE,
    SET_NAME,
    SET_ADDRESS,
    SET_PHONE,
    SET_LAST_NAME, CLEAR_CART
} from "./types";

export const loadItems = () => (dispatch) => {
    fetch("items.json")
        .then((res) => {
            if (!res.ok) {
                throw Error(res.statusText);
            }
            return res;
        })
        .then((res) => res.json())
        .then((items) => dispatch({type: ITEMS_LOADED, payload: items}))
        .then((e) => dispatch({type: LOAD_FAILED, payload: e.message}));
};

export const setFavArr = (favArr) => (dispatch) => {
    dispatch({type: SET_FAV_ARR, payload: favArr});
};

export const setCartArr = (cartArr) => (dispatch) => {
    dispatch({type: SET_CART_ARR, payload: cartArr});
};

export const clearCart = () => ({type: CLEAR_CART});

export const addModal = (id) => (dispatch) => {
    dispatch({type: ADD_MODAL, payload: {actionType: 'add', id: id}});
};
export const delModal = (id) => (dispatch) => {
    dispatch({type: DEL_MODAL, payload: {actionType: 'del', id: id}});
};
export const hideModal = () => (dispatch) => {
    dispatch({type: HIDE_MODAL, payload: null});
};

export const addName = (data) => ({type: SET_NAME, payload: data});
export const addLastName = (data) => ({type: SET_LAST_NAME, payload: data});
export const addAge = (data) => ({type: SET_AGE, payload: data});
export const addPhone = (data) => ({type: SET_PHONE, payload: data});
export const addAddress = (data) => ({type: SET_ADDRESS, payload: data});
