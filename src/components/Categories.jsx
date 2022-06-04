import React from 'react';
import {setCategory} from "../redux/reduser/filters";


export const Categories =  React.memo(({items,categories,dispatch}) => {


    function onClickItemActiveHandler(index) {
        dispatch(setCategory(index))
    }

    return (
        <div className="categories">
            <ul>
                <li className={categories === null ? 'active':''}
                    onClick={()=>onClickItemActiveHandler(null)}>
                    Все</li>
                {items &&
                    items.map((item, index) => {
                        return <li key={index}
                                   className={categories === index ? "active" : ''}
                                   onClick={()=>onClickItemActiveHandler(index)}>
                            {item}
                        </li>
                    })
                }
            </ul>
        </div>
    );
})

