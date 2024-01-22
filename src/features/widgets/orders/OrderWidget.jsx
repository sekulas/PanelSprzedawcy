import { useContext } from "react";
import LanguageContext from '../../languages/LanguageContext';
import { useNavigate } from "react-router-dom";
import WidgetTypeBox from "../WidgetTypeBox";
import ShopContext from "../../multiple-shop-accounts/ShopContext";
import Orders from "../../widgets/orders/Orders";

const OrderWidget = () => {
    const { dictionary } = useContext(LanguageContext);

    const navigate = useNavigate();

    function onNavigateClicked() {
        navigate("/order");
    }

    return (
    <div className="widget">
        <WidgetTypeBox widgetType={dictionary.sellersPanel.orders.title} onNavigate={onNavigateClicked}/>
        <Orders></Orders>
    </div>);
}

export default OrderWidget;