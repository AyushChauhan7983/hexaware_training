import React, { useEffect, useState } from "react";
import "./App.css";
import CardExampleCard from "./Card";
import MenuExamplePointing from "./Navbar";
import Modal from "./Modal";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, products]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const addProduct = (newProduct) => {
    setProducts([newProduct, ...products]);
  };

  const updateProduct = (id, updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, ...updatedProduct } : product
      )
    );
  };

  return (
    <>
      <MenuExamplePointing search={search} setSearch={setSearch} />
      <div className="modal-container">
        <Modal
          onAddProduct={addProduct}
          onUpdateProduct={updateProduct}
          currentProduct={currentProduct}
          setCurrentProduct={setCurrentProduct}
        />
      </div>
      <div className="container">
        {(search.length > 0 ? filteredProducts : products).map((product) => (
          <CardExampleCard
            key={product.id}
            product={product}
            removeProduct={removeProduct}
            updateProduct={updateProduct}
          />
        ))}
      </div>
    </>
  );
}

export default App;
