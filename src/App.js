import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React, { useState } from "react";

const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 3999,
    imageUrl: "./img/sneakers/1.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 3999,
    imageUrl: "./img/sneakers/2.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 2999,
    imageUrl: "./img/sneakers/3.jpg",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 2999,
    imageUrl: "./img/sneakers/4.jpg",
  },

  {
    title: "Мужские Кроссовки Under Armour Curry 8",
    price: 4199,
    imageUrl: "./img/sneakers/5.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Kyrie 7",
    price: 3540,
    imageUrl: "./img/sneakers/6.jpg",
  },
  {
    title: "Мужские Кроссовки Jordan Air Jordan 11",
    price: 3999,
    imageUrl: "./img/sneakers/7.jpg",
  },
  {
    title: "Мужские Кроссовки Nike LeBron XVIII",
    price: 5499,
    imageUrl: "./img/sneakers/8.jpg",
  },

  {
    title: "Мужские Кроссовки Nike Lebron XVIII Low",
    price: 5499,
    imageUrl: "./img/sneakers/9.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 3999,
    imageUrl: "./img/sneakers/10.jpg",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 2999,
    imageUrl: "./img/sneakers/11.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Kyrie Flytrap IV",
    price: 3540,
    imageUrl: "./img/sneakers/12.jpg",
  },
];

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);

  return (
    <div className="wrapper clear">
      {cartOpened ? <Drawer onClose={() => setCartOpened(false)} /> : null}

      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="mb-40 d-flex align-center justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="../img/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex justify-between flex-wrap">
          {arr.map((x) => (
            <Card title={x.title} imageUrl={x.imageUrl} price={x.price} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
