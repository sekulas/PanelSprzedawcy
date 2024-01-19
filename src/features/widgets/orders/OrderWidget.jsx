import { useContext } from "react";
import LanguageContext from '../../languages/LanguageContext';
import { useNavigate } from "react-router-dom";
import WidgetTypeBox from "../WidgetTypeBox";

const OrderWidget = () => {
    const { dictionary } = useContext(LanguageContext);

    const navigate = useNavigate();

    function onNavigateClicked() {
        navigate("/order");
    }

    return (
    <div className="widget">
        <WidgetTypeBox widgetType={dictionary.sellersPanel.orders.title} onNavigate={onNavigateClicked}/>
        <div className="order-widget_content">
            <div className="order-widget_content_elem">
                <h3>{dictionary.sellersPanel.orders.unpaid}</h3>
                <h3>20</h3>
            </div>
            <div className="order-widget_content_elem">
                <h3>{dictionary.sellersPanel.orders.unsent}</h3>
                <h3>20</h3>
            </div>
            <div className="order-widget_content_elem">
                <h3>{dictionary.sellersPanel.orders.returned}</h3>
                <h3>20</h3>
            </div>
        </div>
    </div>);
}

export default OrderWidget;