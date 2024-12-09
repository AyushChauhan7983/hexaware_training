import "./App.css";
import Card from "./Card";
import React, { useState, useEffect } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  const [Sproducts, setSproducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState();

  useEffect(() => {
    setSproducts(
      products.filter(
        (temp) =>
          temp.title.toLowerCase().includes(search.toLowerCase()) ||
          temp.category.toLowerCase().includes(search.toLowerCase()) ||
          temp.price.toString().includes(search)
      )
    );
  }, [search]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((temp) => setProducts(temp))
      .catch((e) => console.log("error"));
  }, []);

  const addItems = () => {
    let item = { title, price, image };
    setProducts([item, ...products]);
  };

  const removeItems = (id) => {
    setProducts(products.filter((temp) => temp.id !== id));
  };

  const updateItems = (id, newPrice) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, price: newPrice } : product
      )
    );
  };

  return (
    <div className="container">
      <h1>Search item</h1>
      <input
        style={{
          width: "200px",
          marginTop: "20px",
          display: "block",
          padding: "10px",
          border: "2px solid #000",
          borderRadius: "5px",
        }}
        type="text"
        placeholder="Search by title, category, price"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h1>Add new item</h1>

      <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
        <input
          style={{
            width: "200px",
            display: "block",
            padding: "10px",
            border: "2px solid #000",
            borderRadius: "5px",
          }}
          type="text"
          placeholder="Enter the item name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          style={{
            width: "200px",
            display: "block",
            padding: "10px",
            border: "2px solid #000",
            borderRadius: "5px",
          }}
          type="number"
          placeholder="Enter the item price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          style={{
            width: "200px",
            display: "block",
            padding: "10px",
            border: "2px solid #000",
            borderRadius: "5px",
          }}
          type="text"
          placeholder="Enter the item image url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
        <button
          style={{
            padding: "10px 20px 10px 20px",
            color: "white",
            backgroundColor: "black",
            borderRadius: "16px",
            boxShadow: "2px 2px 5px #999",
          }}
          onClick={addItems}
        >
          Add item
        </button>
      </div>

      <h1>Products</h1>

      <div className="card">
        {(search.length > 0 ? Sproducts : products).map((p) => (
          <Card
            id={p.id}
            title={p.title}
            price={p.price}
            //desc={p.description}
            //cat={p.category}
            //ratings={p.rating.rate}
            //count={p.rating.count}
            image={p.image}
            removeItems={removeItems}
            updateItems={updateItems}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
