import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateBookQty } from "./Bookslice";
import "./App.css";

function Admin() {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();
  const [selectedBook, setSelectedBook] = useState("");
  const [newQuantity, setNewQuantity] = useState(0);

  const handleUpdate = () => {
    if (selectedBook && newQuantity >= 0) {
      dispatch(
        updateBookQty({ bookName: selectedBook, quantity: newQuantity })
      );
    } else {
      alert("Invalid input");
    }
  };

  return (
    <div>
      <h2>Admin Dashboard - Manage Inventory</h2>
      <ul>
        {Object.entries(books).map(([bookName, qty]) => (
          <li key={bookName}>
            {bookName.toUpperCase()}: {qty}
          </li>
        ))}
      </ul>
      <select onChange={(e) => setSelectedBook(e.target.value)} defaultValue="">
        <option value="" disabled>
          Select Book
        </option>
        {Object.keys(books).map((book) => (
          <option key={book} value={book}>
            {book.toUpperCase()}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="New Quantity"
        onChange={(e) => setNewQuantity(Number(e.target.value))}
      />
      <button onClick={handleUpdate}>Update Quantity</button>
    </div>
  );
}

export default Admin;
