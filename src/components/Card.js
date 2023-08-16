function Card(props) {
  return (
    <div className="card mb-40">
      <div className="favorite">
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
        <button className="button">
          <img src="../img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;
