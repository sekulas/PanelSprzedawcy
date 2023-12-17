import { useNavigate } from "react-router-dom";
import { ReactComponent as GoToIcon } from "../../assets/icons/go_to_page.svg";
const OpinionWidget = () => {
    const navigate = useNavigate();
    function onClickWidget() {
        navigate("/opinion");
    }
    return (
    <div className="widget" onClick={onClickWidget}>
        <div className="widget_header">
            <h3>
                Opinie kupujących
            </h3>
            <GoToIcon className="widget_icon"/>
        </div>
        <div>

        </div>
    </div>);
}

export default OpinionWidget;