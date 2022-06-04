import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {filterReduser} from "./reduser/filters";
import {pizzasReduser} from "./reduser/pizza";
import thunk from "redux-thunk";


const rootReduser= combineReducers({
     filters: filterReduser,
     pizzas: pizzasReduser
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const  store = createStore(rootReduser,
    composeEnhancers(applyMiddleware(thunk))
)

