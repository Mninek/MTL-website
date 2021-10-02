import React from 'react';
import "./Button.css";

const STYLES = [
    "btn--primary--solid",
    "btn--roll--solid",
    "btn--danger--solid",
    "btn--success--solid"
]

const SIZES = [
    "btn--small",
    "btn--medium",
    "btn--large"
]

export const Button = ({
    children, 
    type, 
    onClick,
    buttonStyle, 
    buttonSize
}) => {

    //check if buttonstyle exists otherwise default to primary
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    //check if buttonSize exists otherwise default to medium
    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[1];
    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick} type={type}>
            {children}
        </button>
    )
}