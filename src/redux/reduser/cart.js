import {pizzas} from "./pizza";

let initialState = {
    item: {},
    totalCount: 0,
    totalPrice: 0
};

const ADD_ITEM_CART = 'ADD_ITEM_CART';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE';
const CHENG_TOTAL_PRICE_AND_COUNT = 'CHENG_TOTAL_PRICE_AND_COUNT';


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
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: Object.values(state.item).reduce((acc, item) => acc + item.totalCountPizza, 0)
            }
        case SET_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: Object.values(state.item).reduce((acc, item) => acc + item.totalPricePizza, 0)
            }
        case CHENG_TOTAL_PRICE_AND_COUNT:
            const pizzaCart = state.item[action.payload.id]
            return {
                ...state,
                item: {
                    ...state.item,
                    [action.payload.id]: {
                        ...pizzaCart,
                        totalCountPizza: eval(pizzaCart.totalCountPizza + action.payload.sign + 1)

                    }
                }
            }
        default:
            return state
    }
}

export const addItemCart = (item) => ({type: ADD_ITEM_CART, payload: item})
export const setTotalCount = () => ({type: SET_TOTAL_COUNT})
export const setTotalPrice = () => ({type: SET_TOTAL_PRICE})
export const chengTotalPriceAndCount = (payload) => ({type: CHENG_TOTAL_PRICE_AND_COUNT, payload})