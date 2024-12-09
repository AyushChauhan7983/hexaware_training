import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./Bookslice";

export const configstore = configureStore({
  reducer: {
    book: bookReducer,
  },
});

export default configstore;
