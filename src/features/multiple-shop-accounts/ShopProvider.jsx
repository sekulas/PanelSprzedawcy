import React, { useState } from 'react';
import { dictionaryList, shopList } from './ShopContext';
import ShopContext from './ShopContext';

const ShopProvider = ({ children }) => {
  const [shop, setShop] = useState('sklepol');

  const changeShop = (newShop) => {
    setShop(newShop);
  };

  const provider = {
    shop,
    shopData: shopList[shop],
    changeShop,
  };

  return (
    <ShopContext.Provider value={provider}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;