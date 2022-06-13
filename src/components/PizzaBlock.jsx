import React, {useEffect, useState} from 'react';
import {addItemCart, setTotalCountAndPrice} from "../redux/reduser/cart";

export const PizzaBlock = (props) => {
        const [activeTypesDough, setActiveTypesDough] = useState(props.types[0])
        const [activeSizesPizza, setActiveSizesPizza] = useState(props.sizes[0])
        const [count, setCount] = useState(0)

        const aviableTypeDough = ['тонкое', 'традиционное']
        const aviableSizeDough = [26, 30, 40]


        function setNewtypesDough(newIndex) {
            setActiveTypesDough(newIndex)
        }

        function setNewSizesPizza(newSizes) {
            setActiveSizesPizza(newSizes)
        }

        useEffect(() => {
            setCount(Object.values(props.itemAddedPizzas).filter(item => item.name === props.name).reduce((acc, item) => {
                return acc + item.totalCountPizza
            }, 0))
        }, [props.totalCount])


        function handlerAddItemCart() {
            props.dispatch(addItemCart({
                id: props.id,
                name: props.name,
                type: aviableTypeDough[activeTypesDough],
                size: activeSizesPizza,
                price: props.price,
                url: props.imageUrl,
            }))
            props.dispatch(setTotalCountAndPrice())
        }

        return (<div className="pizza-block">
            <img
                className="pizza-block__image"
                src={props.imageUrl}
                alt="PizzaBlock"
            />
            <h4 className="pizza-block__title">{props.name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {aviableTypeDough.map((item, index) => {
                        const finslClassNameAviableTypeDough = !props.types.includes(index) ? "disablet" : index === activeTypesDough ? "active" : ''
                        return <li key={index}
                                   className={finslClassNameAviableTypeDough}
                                   onClick={() => setNewtypesDough(index)}
                        >
                            {item}
                        </li>
                    })}
                </ul>
                <ul>
                    {aviableSizeDough.map((item, index) => {
                        const finslClassNameAviableSizeDough = !props.sizes.includes(item) ? "disablet" : item === activeSizesPizza ? "active" : ''
                        return <li key={index}
                                   className={finslClassNameAviableSizeDough}
                                   onClick={() => setNewSizesPizza(item)}
                        >
                            {item} см.
                        </li>
                    })}

                </ul>
            </div>
            <div className="pizza-block__bottom" onClick={handlerAddItemCart}>
                <div className="pizza-block__price">от {props.price} грн</div>
                <div className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    {props.totalCountPizza && <i>{count}</i>}
                </div>
            </div>
        </div>);
    }
;

