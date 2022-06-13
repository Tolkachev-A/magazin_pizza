import {pizzas} from "./pizza";

let initialState = {
    item: {},
    totalCount: 0,
    totalPrice: 0
};

const ADD_ITEM_CART = 'ADD_ITEM_CART';
const SET_TOTAL_COUNT_AND_PRICE = 'SET_TOTAL_COUNT_AND_PRICE';
const CHENG_TOTAL_PIZZAS_CLICK_PLUS = 'CHENG_TOTAL_PIZZAS_CLICK_PLUS';
const CHENG_TOTAL_PIZZAS_CLICK_MINUS = 'CHENG_TOTAL_PIZZAS_CLICK_MINUS';
const REMOVE_PIZZA = 'REMOVE_PIZZA';
const DELETE_ALL_PIZZAS = 'DELETE_ALL_PIZZAS';


export const cart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_CART:
            const pizza = state.item[action.payload.id]
            const countPizza = pizza ? pizza.totalCountPizza + 1 : 1
            const pricePizza = pizza ? pizza.totalPricePizza + pizza.price : action.payload.price
            return {
                ...state,
                item: {
                    ...state.item,
                    [action.payload.id]: {
                        ...action.payload,
                        totalCountPizza: countPizza,
                        totalPricePizza: pricePizza,
                    }
                },
            }
        case SET_TOTAL_COUNT_AND_PRICE:
            return {
                ...state,
                totalCount: Object.values(state.item).reduce((acc, item) => acc + item.totalCountPizza, 0),
                totalPrice: Object.values(state.item).reduce((acc, item) => acc + item.totalPricePizza, 0)
            }
        case CHENG_TOTAL_PIZZAS_CLICK_PLUS:
            const pizzaCartPlus = state.item[action.payload]
            return {
                ...state,
                item: {
                    ...state.item,
                    [action.payload]: {
                        ...pizzaCartPlus,
                        totalCountPizza: pizzaCartPlus.totalCountPizza + 1,
                        totalPricePizza: pizzaCartPlus.totalPricePizza + pizzaCartPlus.price,

                    }
                }
            }
        case CHENG_TOTAL_PIZZAS_CLICK_MINUS:
            const pizzaCartMinus = state.item[action.payload]
            return {
                ...state,
                item: {
                    ...state.item,
                    [action.payload]: {
                        ...pizzaCartMinus,
                        totalCountPizza: pizzaCartMinus.totalCountPizza - 1,
                        totalPricePizza: pizzaCartMinus.totalPricePizza - pizzaCartMinus.price,
                    }
                }
            }
        case REMOVE_PIZZA:
            delete state.item[action.payload]
            return {
                ...state
            }
        case DELETE_ALL_PIZZAS:
            return {
                ...state,
                item: {}
            }
        default:
            return state
    }
}

export const addItemCart = (item) => ({type: ADD_ITEM_CART, payload: item})
export const setTotalCountAndPrice = () => ({type: SET_TOTAL_COUNT_AND_PRICE})
export const chengTotalPizzasClickPlus = (payload) => ({type: CHENG_TOTAL_PIZZAS_CLICK_PLUS, payload})
export const chengTotalPizzasClickMinus = (payload) => ({type: CHENG_TOTAL_PIZZAS_CLICK_MINUS, payload})
export const removePizza = (payload) => ({type: REMOVE_PIZZA, payload})
export const deleteAllPizzas = () => ({type: DELETE_ALL_PIZZAS})
