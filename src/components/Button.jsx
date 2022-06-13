import React from 'react';

export const Button = (props) => {
    return (
        <div className="header__cart">
            <button
                className={`button ${props.className}`}>
                {props.children}
            </button>
        </div>
    );
};

