import React, { createContext } from 'react';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {}
  for(let i=1; i<VEG.length+1; i++){
    cart[i] = 0;
  }
}

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState();
  return (
    <ShopContext.Provider>(props.product)</ShopContext.Provider>
  );
};
