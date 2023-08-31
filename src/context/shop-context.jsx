import React, { createContext } from 'react';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {}
}

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState();
  return (
    <ShopContext.Provider>(props.product)</ShopContext.Provider>
  );
};
