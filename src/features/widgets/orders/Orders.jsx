import { useContext } from "react";
import LanguageContext from '../../languages/LanguageContext';
import ShopContext from "../../multiple-shop-accounts/ShopContext";

const Orders = () => {
    const { dictionary } = useContext(LanguageContext);
    const { shopData } = useContext(ShopContext);

    return(        
    <div className="order-widget_content">
    <div className="order-widget_content_elem">
        <h3>{dictionary.sellersPanel.orders.unpaid}</h3>
        <h3>{shopData.orders.unpaid}</h3>
    </div>
    <div className="order-widget_content_elem">
        <h3>{dictionary.sellersPanel.orders.unsent}</h3>
        <h3>{shopData.orders.unsent}</h3>
    </div>
    <div className="order-widget_content_elem">
        <h3>{dictionary.sellersPanel.orders.returned}</h3>
        <h3>{shopData.orders.returned}</h3>
    </div>
</div>);
} 

export default Orders