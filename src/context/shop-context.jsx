import React, { createContext } from 'react';

export const ShopContext = createContext(null);
{
  1:2
}

const getDefaultCart = () => {
  let cart = {}
  for(let i=1; i<VEG.length+1; i++){
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) =>{
    setCartItems((prev) => ({...prev, [itemId]: }))
  }
  return (
    <ShopContext.Provider>(props.product)</ShopContext.Provider>
  );
};
