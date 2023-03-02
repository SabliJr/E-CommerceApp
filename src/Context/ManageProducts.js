import { createContext, useState, useEffect } from "react";
export const productsContext = createContext();

export const ManageProductsProvider = ({ children }) => {
  const [sendToCart, setSendToCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  // const [quantity, setQuantity] = useState(0);

  //Adding item to the cart
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

  // Increase product quantity
  const handleQuantityIncrease = (productId) => {
    // Find relevant product index
    const productIndex = sendToCart.findIndex((pro) => pro.id === productId);
    // Find product
    const product = sendToCart[productIndex];
    // Increase product quantity
    product.quantity += 1;
    // Take a copy of sendToCart without the product need to be updated
    const charProducts = sendToCart.slice();
    // Add back the updated product to charProducts
    charProducts.slice(product, 0);
    console.log({ charProducts });
    // Update sendToCart with the new data
    setSendToCart(charProducts);
  };

  // Increase product quantity
  const handleQuantityDecrease = (productId) => {
    // Find relevant product index
    const productIndex = sendToCart.findIndex((pro) => pro.id === productId);
    // Find product
    const product = sendToCart[productIndex];
    // Do nothing when the current product quantity is zero
    if (product.quantity <= 0) {
      return;
    }
    // Decrease product quantity
    product.quantity -= 1;
    // Take a copy of sendToCart without the product need to be updated
    const charProducts = sendToCart.slice();
    // Add back the updated product to charProducts
    charProducts.slice(product, 0);
    console.log({ charProducts });
    // Update sendToCart with the new data
    setSendToCart(charProducts);
  };

  //Removing item from cart
  let removeItemDeCart = (id) => {
    const newArr = sendToCart.filter((y) => y.id !== id);
    setSendToCart(newArr);
  };

  //Calculating the total price
  let calculateTotal = () => {
    let total = sendToCart
      .map((f) => f.price)
      .reduce((acc, val) => acc + val, 0);
    setTotalPrice(total);
  };

  useEffect(() => {
    calculateTotal();
  });

  // let increaseProQnt = (x, d) => {
  //   let clickedBtn = d;
  //   let decres = quantity - 1;

  //   if (clickedBtn === +1) {
  //     setQuantity(quantity + 1);
  //   } else if (clickedBtn === -1) {
  //     setQuantity(quantity > 0 ? decres : 0);
  //   }
  // };

  // let addTheProduct = (x) => {
  //   sendToCart.forEach((product) => {
  //     if (x.id === product.id) {
  //       quantity = +sendToCart;
  //     }
  //   });
  //   setSendToCart([...sendToCart, x, quantity]);
  // };

  return (
    <productsContext.Provider
      value={{
        addToCart,
        sendToCart,
        warning,
        removeItemDeCart,
        totalPrice,
        handleQuantityDecrease,
        handleQuantityIncrease,
        // quantity,
        // increaseProQnt,
        // addTheProduct,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};
