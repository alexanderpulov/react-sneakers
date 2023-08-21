function Drawer(props) {
  return (
    <div className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="d-flex align-center justify-between mb-30">
          Корзина
          <img
            onClick={props.onClose}
            className="removeBtn"
            src="/img/btn-remove.svg"
            alt="Close"
          />
        </h2>

        <div className="items flex">
          <div className="cartItem d-flex align-center mb-20">
            <div
              className="cartItemImg"
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
            ></div>
            <div className="mr-15">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>3999 грн.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <div
              className="cartItemImg"
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
            ></div>
            <div className="mr-15">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>3999 грн.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
        </div>

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
            Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
