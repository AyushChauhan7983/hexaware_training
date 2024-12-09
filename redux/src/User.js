import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { purchaseBook, returnBook } from "./Bookslice";
import "./App.css";

function User() {
  const books = useSelector((state) => state.book);
  const [bookName, setBookName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const handlePurchase = () => {
    if (books[bookName] !== undefined) {
      dispatch(purchaseBook({ bookName, quantity }));
    } else {
      alert("Book not found in inventory");
    }
  };

  const handleReturn = () => {
    if (books[bookName] !== undefined) {
      dispatch(returnBook({ bookName, quantity }));
    } else {
      alert("Book not found in inventory");
    }
  };

  return (
    <div>
      <h2>User Dashboard - Purchase or Return Books</h2>
      <ul>
        {Object.entries(books).map(([bookName, qty]) => (
          <li key={bookName}>
            {bookName.toUpperCase()}: {qty}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Enter Book Name"
        onChange={(e) => setBookName(e.target.value.toLowerCase())}
      />
      <input
        type="number"
        placeholder="Enter Quantity"
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <button onClick={handlePurchase}>Purchase Book</button>
      <button onClick={handleReturn}>Return Book</button>
    </div>
  );
}

export default User;
