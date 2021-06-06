import {SET_ADDRESS, SET_AGE, SET_LAST_NAME, SET_NAME, SET_PHONE} from "../types";

const INITIAL_STATE = {
    name: '',
    lastName: '',
    age: '',
    address: '',
    phone: ''
}

const formReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case SET_NAME:
            return {
                ...state, name: action.payload
            }

        case SET_LAST_NAME:
            return {
                ...state, lastName: action.payload
            }

        case SET_AGE:
            return {
                ...state, age: action.payload
            }

        case SET_ADDRESS:
            return {
                ...state, address: action.payload
            }

        case SET_PHONE:
            return {
                ...state, phone: action.payload
            }

        default:
            return state;
    }
}

export default formReducer;
