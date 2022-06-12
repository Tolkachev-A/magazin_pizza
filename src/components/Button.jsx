import React from 'react';
import {NavLink} from "react-router-dom";

export const Button = (props) => {
    return (
        <div className="header__cart">
            <NavLink to="cart"
                    className={`button ${props.className}`}>
                {props.children}
            </NavLink>
        </div>
    );
};

