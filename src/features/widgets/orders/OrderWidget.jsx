import { useContext } from "react";
import LanguageContext from '../../languages/LanguageContext';
import { useNavigate } from "react-router-dom";
import { ReactComponent as GoToIcon } from "../../../assets/icons/go_to_page.svg"
const OrderWidget = () => {
    const { dictionary } = useContext(LanguageContext);
    const navigate = useNavigate();
    function onClickWidget() {
        navigate("/order");
    }
    return (
    <div className="widget">
        <div className="widget_header">
            <h3>
                {dictionary.sellersPanel.orders.title}
            </h3>
            <GoToIcon className="widget_icon" onClick={onClickWidget}/>
        </div>
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