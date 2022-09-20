import React from 'react';
import {NavLink} from "react-router-dom";

export const Payment = () => {
    return (
        <div className="container container--cart">
            <div style={{textAlign: 'center'}}>
                <h1>Ваш заказ принят</h1>
                <h1>Мы с вами свяжемся</h1>
                <NavLink to={"/"}
                         className="button button--outline button--add go-back-btn"
                         style={{padding: '20px 50px', marginTop: '50px'}}
                >
                    <span>На главную</span>
                </NavLink>
            </div>
        </div>
    );
};

