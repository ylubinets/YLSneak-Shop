import React from "react";
import Card from "../Card/Card";
import styles from "./List.module.scss";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import {hideModal, setCartArr} from "../../Redux/actions";
import FormCart from "../Form/Form";

const List = (props) => {
    const dispatch = useDispatch();

    const {
        items,
        error,
        title,
        listEmpty,
        formCart
    } = props;

    const cartArr = useSelector((state) => state.items.cartArr);
    const isModalOpen = useSelector((state) => state.modal.isModalOpen)

    const closeModal = () => {
        dispatch(hideModal())
    };

    function addToCart(id) {
        let array = [...cartArr, id];
        dispatch(setCartArr(array))
        localStorage.setItem("cart", JSON.stringify(array));
    }

    function delFromCart(id) {
        let array = cartArr.filter(function (item) {
            return item !== id;
        });
        dispatch(setCartArr([...array]));
        localStorage.setItem("cart", JSON.stringify([...array]));
    }

    return (
        <div>
            <h1 className={styles.title}>{title}</h1>
            <div className={`${styles.cards_wrapper}`}>
                {!listEmpty.length && (
                    <h3 className={styles.nothing}>Nothing here yet!</h3>
                )}
                {error ? (
                    <div>{error}</div>
                ) : (
                    items.map((item) => (
                        <Card
                            key={item.id}
                            item={item}
                            isDelBtn={!cartArr.includes(item.id)}
                        />
                    ))
                )}
                {formCart && cartArr.length ? <FormCart/> : <p></p>}
            </div>
            {isModalOpen && (
                <Modal
                    backgroundColor={
                        isModalOpen.actionType === "add" ? "#1E656D" : "#e74c3c"
                    }
                    headerText={
                        isModalOpen.actionType === "add" ? "Add to cart?" : "Delete?"
                    }
                    closeButton={true}
                    text={"Are you sure?"}
                    actions={[
                        <Button
                            key={"1"}
                            backgroundColor="rgba(0,0,0,.3)"
                            text={isModalOpen.actionType === "add" ? "Add" : "Delete"}
                            className="modal__buttons"
                            onClick={() => {
                                isModalOpen.actionType === "add"
                                    ? addToCart(isModalOpen.id)
                                    : delFromCart(isModalOpen.id);
                                closeModal();
                            }}
                        />,
                        <Button
                            key={"2"}
                            backgroundColor="rgba(0,0,0,.3)"
                            text="Cancel"
                            className="modal__buttons"
                            onClick={closeModal}
                        />,
                    ]}
                    status={closeModal}
                />
            )}
        </div>
    );
};

List.propTypes = {
    items: PropTypes.array.isRequired,
    onFavClick: PropTypes.func,
    addToCart: PropTypes.func,
    delFromCart: PropTypes.func,
};

export default List;
