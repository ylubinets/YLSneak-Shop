import React from "react";
import style from "./Button.module.scss";

const Button = (props) => {
    const {text, backgroundColor, onClick} = props;
    return (
        <div>
            <button
                data-testid="button-test"
                className={`${style.btn}`}
                onClick={onClick}
                style={{backgroundColor: backgroundColor}}
            >
                {text}
            </button>
        </div>
    );
};

export default Button;