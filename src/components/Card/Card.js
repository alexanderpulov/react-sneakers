import styles from "./Card.module.scss";
import React from "react";

function Card({id, title, price, imageUrl, onPlus, onFavorite}) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isLiked, setIsLiked] = React.useState(false);

    const onClickPlus = () => {
        onPlus({id, title, price, imageUrl});
        setIsAdded(!isAdded);
    };

    const onClickFavorite = () => {
        onFavorite();
        setIsLiked(!isLiked);
    };

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img
                    src={isLiked ? "/img/heart-3-fill.svg" : "/img/heart-3-line.svg"}
                />
            </div>
            <img
                className="mb-15"
                width={133}
                height={112}
                src={imageUrl}
                alt="Sneakers"
            />
            <h5 className="mb-15">{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} грн.</b>
                </div>

                <img
                    className={styles.plus}
                    onClick={onClickPlus}
                    src={isAdded ? "../img/btn-cheked.svg" : "../img/btn-plus.svg"}
                    alt="Plus"
                />
            </div>
        </div>
    );
}

export default Card;
