import React from "react";
import Button from "../Button/Button";
import Fav from "../Fav/Fav";
import style from "./Card.module.scss";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {addModal, delModal} from "../../Redux/actions";

const Card = (props) => {
  const dispatch = useDispatch();
  const { item, isDelBtn } = props;
  const { imgUrl, name, color, price, id } = item;

  return (
    <div>
      <div className={`${style.card}`}>
        <img className={`${style.card__img}`} src={imgUrl} alt="Card" />
        <Fav id={id} />
        <div className={`${style.card__title}`}>{name}</div>
        <div className={`${style.card__additional}`}>{color}</div>
        <div className={`${style.card__price}`}>Price: {price}</div>
        {isDelBtn ? (
          <Button
            text="Add to Cart"
            backgroundColor={"#00293C"}
            onClick={() => dispatch(addModal(id))}
          />
        ) : (
          <Button
            text="Delete from cart"
            backgroundColor={"#F62A00"}
            onClick={() => dispatch(delModal(id))}
          />
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
  addToCart: PropTypes.func,
  onFavClick: PropTypes.func,
  delFromCart: PropTypes.func,
  isDelBtn: PropTypes.bool,
};

export default Card;