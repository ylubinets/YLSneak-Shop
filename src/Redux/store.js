import { itemsReducer } from "./reducers/itemsReducer";
import {modalReducer} from "./reducers/modalReducer";
import formReducer from "./reducers/formReducer";
import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


const rootReducer = combineReducers({
    items: itemsReducer,
    modal: modalReducer,
    form: formReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
