import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/reduser/filters";


export const Categories = ({items}) => {
    const sortBy = useSelector(state=>state.filters.categories )
    const dispatch= useDispatch()




    function onClickItemActiveHandler(index) {
        dispatch(setCategory(index))
    }

    return (
        <div className="categories">
            <ul>
                <li className={sortBy === null ? 'active':''}
                onClick={()=>onClickItemActiveHandler(null)}>
                    Все</li>
                {items &&
                    items.map((item, index) => {
                        return <li key={index}
                                   className={sortBy === index ? "active" : ''}
                        onClick={()=>onClickItemActiveHandler(index)}>
                            {item}
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

