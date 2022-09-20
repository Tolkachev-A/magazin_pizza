import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux";
import {filters} from "./reduser/filters";
import {pizzas} from "./reduser/pizza";
import thunk from "redux-thunk";
import {cart} from "./reduser/cart";


const rootReduser = combineReducers({
    filters,
    pizzas,
    cart,
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReduser,
    composeEnhancers(applyMiddleware(thunk))
)

window.state = store
