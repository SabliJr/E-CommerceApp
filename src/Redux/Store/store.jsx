import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../Features/productsSlice";
console.log(productReducer);

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
