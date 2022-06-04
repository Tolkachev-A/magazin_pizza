import axios from "axios";
import {isLoading} from "./filters";

const initialState = {
    pizzas: [],

}

const SET_PIZZA = 'SET_PIZZA'

export const pizzasReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_PIZZA: {
            return {...state, pizzas: action.pizzas}
        }
        default:
            return state
    }
};

export const setPizzas = (pizzas) => ({type: SET_PIZZA, pizzas})


export   const fetchPizzas = (categories, sort) => async dispatch => {

    dispatch(isLoading(true))
    let respons = await axios.get(`http://localhost:3001/pizzas?${categories !== null ?`category=${categories}`:''}&_sort=${sort}`)
    dispatch(setPizzas(await respons.data))
    await dispatch( isLoading(false))
}