import React from "react";
import axios from "axios";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState("")

    React.useEffect(() => {
        /*fetch("https://65030766a0f2c1f3faeb4fda.mockapi.io/items")
            .then((res) => {
                return res.json();
            })
            .then((json) => setItems(json));*/

        axios.get("https://65030766a0f2c1f3faeb4fda.mockapi.io/items").then(res => {
            setItems(res.data)
        })
        axios.get("https://65030766a0f2c1f3faeb4fda.mockapi.io/cart").then(res => {
            setCartItems(res.data)
        })

    }, []);

    const onAddToCart = (obj) => {
        axios.post("https://65030766a0f2c1f3faeb4fda.mockapi.io/cart", obj)

        setCartItems((prev) => [...prev, obj]);
    };

    const deleteItemFromCard = (id) => {
        setCartItems(prev => prev.filter(c => c.id !== id))
        axios.delete(`https://65030766a0f2c1f3faeb4fda.mockapi.io/cart/${id}`)
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.currentTarget.value)
    }

    return (
        <div className="wrapper clear">
            {cartOpened ? (<Drawer cartItems={cartItems}
                                   onClose={() => setCartOpened(false)}
                                   deleteItemFromCard={deleteItemFromCard}/>) : null}

            <Header onClickCart={() => setCartOpened(true)}/>

            <div className="content p-40">
                <div className="mb-40 d-flex align-center justify-between">
                    <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : "Все кроссовки"}</h1>
                    <div className="search-block d-flex">
                        <img src="../img/search.svg" alt="Search"/>
                        <div>
                            <input value={searchValue} onChange={onChangeSearchInput} type="text"
                                   placeholder="Поиск..."/>
                            {searchValue && <button className={"inputX"} onClick={() => setSearchValue("")}>x</button>}

                        </div>

                    </div>
                </div>

                <div className="d-flex flex-wrap">
                    {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map(item =>
                        <Card
                            title={item.title}
                            id={item.id}
                            key={item.id}
                            imageUrl={item.imageUrl}
                            price={item.price}
                            onFavorite={() => console.log("товар дабавлен в закладки")}
                            onPlus={(obj) => onAddToCart(obj)}
                        />)}
                </div>
            </div>
        </div>
    );
}

export default App;
