import Order from "../features/widgets/orders/Orders"
import { useContext } from "react";
import LanguageContext from '../features/languages/LanguageContext';

const OrderPage = () => {
  const { dictionary } = useContext(LanguageContext);

    return (
      <div id="order-page">
            <h1>{dictionary.sellersPanel.orders.title}</h1>
            <Order></Order>
      </div>
    );
  }
  
  export default OrderPage;