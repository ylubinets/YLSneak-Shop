import React from "react";
import style from "./Modal.module.scss";

const Modal = (props) => {
    const {
        headerText,
        closeButton,
        text,
        status,
        actions,
        backgroundColor,
    } = props;


    return (
        <div>
            <div
                className={`${style.modal}`}
                style={{backgroundColor: backgroundColor}}
            >
                <div className={`${style.modal__header}`}>
                    <h4 data-testid="modal-heading">{headerText}</h4>
                    {closeButton && (
                        <span
                            data-testid="modal-cross"
                            className={`${style.modal__header__cross}`}
                            onClick={() => {
                                status();
                            }}
                        >
              X
            </span>
                    )}
                </div>
                <div data-testid="modal-text" className={`${style.modal__txt}`}>{text}</div>
                <div className="modal__buttons-block">
                    {actions.map((button, key) => {
                        return button;
                    })}
                </div>
            </div>
            <div className={`${style.overlay}`} onClick={() => status()}/>
        </div>
    );
};

export default Modal;
