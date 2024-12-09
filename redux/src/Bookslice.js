import { createSlice } from "@reduxjs/toolkit";

const Book = createSlice({
  name: "book",
  initialState: { dsa: 100, java: 200, react: 100, javascript: 700 },
  reducers: {
    purchaseBook(state, action) {
      const { bookName, quantity } = action.payload;
      if (state[bookName] !== undefined && state[bookName] >= quantity) {
        state[bookName] -= quantity;
      } else {
        alert("Invalid purchase request or insufficient stock");
      }
    },
    returnBook(state, action) {
      const { bookName, quantity } = action.payload;
      if (state[bookName] !== undefined) {
        state[bookName] += quantity;
      } else {
        alert("Invalid return request");
      }
    },
    updateBookQty(state, action) {
      const { bookName, quantity } = action.payload;
      if (state[bookName] !== undefined) {
        state[bookName] = quantity;
      }
    },
  },
});

export default Book.reducer;
export const { purchaseBook, returnBook, updateBookQty } = Book.actions;
