import { useContext } from 'react';
import { shopsOptions } from './ShopContext';
import ShopContext from './ShopContext';

const ShopSelector = () => {
  const { shop, changeShop } = useContext(ShopContext);
  const handleShopChange = (e) => changeShop(e.target.value);

  return (
    <select onChange={handleShopChange} value={shop}>
      {Object.entries(shopsOptions).map(([id, name]) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default ShopSelector;