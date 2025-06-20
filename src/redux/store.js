import { combineReducers, createStore } from "redux";
import userReducer from "./Checkreducer";
// import {configureStore} from "@reduxjs/toolkit"
const rootReducer = combineReducers({
    user: userReducer
})  
const store1 = createStore(rootReducer)
console.log(store1.getState(),"get state from store")

export default store1;


