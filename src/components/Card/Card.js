import styles from "./Card.module.scss";
import React from "react";

function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onPlusClick = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={props.onFavoritePlus}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img
        className="mb-15"
        width={133}
        height={112}
        src={props.imageUrl}
        alt="Sneakers"
      />
      <h5 className="mb-15">{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} грн.</b>
        </div>

        <img
          className={styles.plus}
          onClick={onPlusClick}
          src={isAdded ? "../img/btn-cheked.svg" : "../img/btn-plus.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;