import { createContext, useReducer, useState } from "react";
import AppReducer from "./AppReducer";

export const productsContext = createContext();

let cartItems = 0;

export const ManageProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, cartItems);
  const [cart, setCrt] = useState(cartItems);

  let addToCart = (cart) => {};

  return (
    <productsContext.Provider
      value={{
        cart: state.cart,
        addToCart,
      }}>
      {children}
    </productsContext.Provider>
  );
};
