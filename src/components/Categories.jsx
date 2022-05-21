import React, {useState} from 'react';


export const Categories = ({items}) => {
    const [itemActive, setItemActive] = useState(null)

    function onClickItemActiveHandler(index) {
        setItemActive(index)
    }

    return (
        <div className="categories">
            <ul>
                <li className={itemActive === null ? 'active':''}
                onClick={()=>onClickItemActiveHandler(null)}>
                    Все</li>
                {items &&
                    items.map((item, index) => {
                        return <li key={index}
                                   className={itemActive === index ? "active" : ''}
                        onClick={()=>onClickItemActiveHandler(index)}>
                            {item}
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

