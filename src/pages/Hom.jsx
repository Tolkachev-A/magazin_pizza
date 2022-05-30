import React from 'react';
import '../scss/app.scss';
import {Categories} from "../components/Categories";
import {SortPopup} from "../components/SortPopup";
import {PizzaBlock} from "../components/PizzaBlock";

const Hom = (props) => {

    const itemsPizzas = props.pizza.map(item=><PizzaBlock key={item.id} {...item}/>)

    return (
        <div className="container">
            <div className="content__top">
                <Categories items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}/>
                <SortPopup listSort={['популярности', 'цене', 'алфавиту']}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {itemsPizzas}
            </div>
        </div>
    );
};

export default Hom;