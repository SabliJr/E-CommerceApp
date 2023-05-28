import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  cartQty: 0,
  productItem: [
    {
      theProduct: {},
      quantity: 0,
      size: "",
    },
  ],
};

export const productsSlice = createSlice({
  name: "products",
  initialValues,
  reducers: {
    AddToCart: (state, action) => {
      const makeProduct = state.productItem.find(
        (x) => x.theProduct === action.payload.theProduct.id
      );
      if (!makeProduct) {
        state.productItem.push(action.payload);
      } else {
        makeProduct.quantity += action.payload.quantity;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddToCart } = productsSlice.actions;

export default productsSlice.reducer;
