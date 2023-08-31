import React, { createContext } from 'react';

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  return (
    <ShopContext.Provider>(props.product)</ShopContext.Provider>
  );
};
