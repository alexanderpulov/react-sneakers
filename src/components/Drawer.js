import React from "react";

function Drawer({onClose, cartItems, deleteItemFromCard, remove}) {
    return (
        <div className="overlay">
            <div className="drawer d-flex flex-column">
                <h2 className="d-flex align-center justify-between mb-30">
                    Корзина
                    <img
                        onClick={onClose}
                        className="removeBtn"
                        src="/img/btn-remove.svg"
                        alt="Close"
                    />
                </h2>

                {cartItems.length > 0 ? <div className="items flex">
                    {cartItems.map((obj) => (
                        <div className="cartItem d-flex align-center mb-20">
                            <div
                                className="cartItemImg"
                                style={{backgroundImage: `url(${obj.imageUrl}`}}
                            ></div>
                            <div className="mr-15">
                                <p className="mb-5">{obj.title}</p>
                                <b>{obj.price} грн.</b>
                            </div>
                            <img
                                className="removeBtn"
                                src="/img/btn-remove.svg"
                                alt="Remove"
                                onClick={() => deleteItemFromCard(obj.id)}
                            />
                        </div>
                    ))}
                </div> : <div className="items flex">Корзина пуста</div>}


                <div className="cartTotalBlock">
                    <ul>
                        <li className="mb-20">
                            <span>Итого:</span>
                            <div></div>
                            <b>3999 грн.</b>
                        </li>
                        <li className="mb-30">
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>199 грн.</b>
                        </li>
                    </ul>
                    <button className="greenButton">
                        Оформить заказ <img src="/img/arrow.svg" alt="Arrow"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;
