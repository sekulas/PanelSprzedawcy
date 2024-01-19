import { createContext } from 'react';
import sklepol from './shop-accounts/sklepol.json';
import januszex from './shop-accounts/januszex.json';

export const dictionaryList = { sklepol, januszex };

export const shopsOptions = {  sklepol: 'SKELPOL',  januszex: 'JANUSZEX' };

const ShopContext = createContext({ 
  shop: 'sklepol', 
  dictionary: dictionaryList.pl,
  changeShop: () => {},
});

export default ShopContext;