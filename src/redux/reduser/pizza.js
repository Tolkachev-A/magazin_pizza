import {isLoading} from "./filters";

const initialState = {
    pizzas: [
        {
            "id": 0,
            "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
            "name": "Пепперони Фреш с перцем",
            "types": [0, 1],
            "sizes": [26, 30, 40],
            "price": {'26': 806, '30': 850, '40': 900},
            "category": 0,
            "rating": 4
        },
        {
            "id": 1,
            "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
            "name": "Сырная",
            "types": [0],
            "sizes": [26, 40],
            "price": {'26': 245, '40': 295},
            "category": 1,
            "rating": 6
        },
        {
            "id": 2,
            "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg",
            "name": "Цыпленок барбекю",
            "types": [0],
            "sizes": [26, 40],
            "price": {'26': 280, '40': 345},
            "category": 1,
            "rating": 4
        },
        {
            "id": 3,
            "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg",
            "name": "Кисло-сладкий цыпленок",
            "types": [1],
            "sizes": [26, 30, 40],
            "price": {'26': 275, '30': 305, '40': 322},
            "category": 2,
            "rating": 2
        },
        {
            "id": 4,
            "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
            "name": "Чизбургер-пицца",
            "types": [0, 1],
            "sizes": [26, 30, 40],
            "price": {'26': 415, '30': 445, '40': 480},
            "category": 3,
            "rating": 8
        },
        {
            "id": 5,
            "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg",
            "name": "Крэйзи пепперони",
            "types": [0],
            "sizes": [30, 40],
            "price": {'30': 580, '40': 650},
            "category": 2,
            "rating": 2
        },
        {
            "id": 6,
            "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg",
            "name": "Пепперони",
            "types": [0, 1],
            "sizes": [26, 30, 40],
            "price": {'26': 675, '30': 705, '40': 720},
            "category": 1,
            "rating": 9
        },
        {
            "id": 7,
            "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg",
            "name": "Маргарита",
            "types": [0, 1],
            "sizes": [26, 30, 40],
            "price": {'26': 450, '30': 480, '40': 500},
            "category": 4,
            "rating": 10
        },
        {
            "id": 8,
            "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg",
            "name": "Четыре сезона",
            "types": [0, 1],
            "sizes": [26, 30, 40],
            "price": {'26': 395, '30': 425, '40': 450},
            "category": 4,
            "rating": 10
        },
        {
            "id": 9,
            "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg",
            "name": "Овощи и грибы 🌱",
            "types": [0, 1],
            "sizes": [26, 30, 40],
            "price": {'26': 285, '30': 315, '40': 350},
            "category": 4,
            "rating": 7
        }
    ],

}

const SET_PIZZA = 'SET_PIZZA'

export const pizzas = (state = initialState, action) => {
    switch (action.type) {
        case SET_PIZZA: {
            return {...state, pizzas: action.pizzas}
        }
        default:
            return state
    }
};

export const setPizzas = (pizzas) => ({type: SET_PIZZA, pizzas})


export const fetchPizzas = (categories, sort) => async dispatch => {

    dispatch(isLoading(true))
    let responsFilterPizzas
    if (categories === null) {
        responsFilterPizzas = [...initialState.pizzas]
    } else {
        responsFilterPizzas = initialState.pizzas.filter((item => {
            return item.category === categories
        }))
    }
    let response
    if (sort === "price") {
        response = responsFilterPizzas.sort((a, b) => a[sort][40] > b[sort][40] ? 1 : -1)
    } else {
        response = responsFilterPizzas.sort((a, b) => a[sort] > b[sort] ? 1 : -1)
    }
    dispatch(setPizzas(response))
    dispatch(isLoading(false))
}