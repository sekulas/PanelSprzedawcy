import { useNavigate } from "react-router-dom";
import { ReactComponent as GoToIcon } from "../../assets/icons/go_to_page.svg";
const OrderWidget = () => {
    const navigate = useNavigate();
    function onClickWidget() {
        navigate("/order");
    }
    return (
    <div className="widget">
        <div className="widget_header">
            <h3>
                Zamówienie
            </h3>
            <GoToIcon className="widget_icon" onClick={onClickWidget}/>
        </div>
        <div className="order-widget_content">
            <div className="order-widget_content_elem">
                <h3>Nieopłacone</h3>
                <h3>20</h3>
            </div>
            <div className="order-widget_content_elem">
                <h3>Niewysłane</h3>
                <h3>20</h3>
            </div>
            <div className="order-widget_content_elem">
                <h3>Zwroty</h3>
                <h3>20</h3>
            </div>
        </div>
    </div>);
}

export default OrderWidget;