import { createContext, useState } from "react";
// import AppReducer from "./AppReducer";
export const productsContext = createContext();

export const ManageProductsProvider = ({ children }) => {
  const [sendToCart, setSendToCart] = useState([]);
  const [warning, setWarning] = useState(false);

  // const [state, dispatch] = useReducer(AppReducer, cartItems);

  let addToCart = (x) => {
    let isPresent = false;
    sendToCart.forEach((product) => {
      if (x.id === product.id) {
        isPresent = true;
      }
    });

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setSendToCart([...sendToCart, x]);
  };

  return (
    <productsContext.Provider
      value={{
        addToCart,
        sendToCart,
        warning,
      }}>
      {children}
    </productsContext.Provider>
  );
};
