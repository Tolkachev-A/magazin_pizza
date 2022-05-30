import {combineReducers, createStore} from "redux";
import {Filters} from "./reduser/filters";




 const rootReduser= combineReducers({
     filters: Filters
})

export const  store = createStore(rootReduser,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

