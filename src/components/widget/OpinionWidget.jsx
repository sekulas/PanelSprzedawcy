import Opinion  from "../opinion/Opinion"
import { useNavigate } from "react-router-dom";
import { ReactComponent as GoToIcon } from "../../assets/icons/go_to_page.svg";
import { useContext } from "react";
import LanguageContext from '../../context/LanguageContext';
const OpinionWidget = () => {
    const { dictionary } = useContext(LanguageContext);
    const navigate = useNavigate();
    function onClickWidget() {
        navigate("/opinion");
    }
    return (
    <div className="widget" >
        <div className="widget_header">
            <h3>
                {dictionary.sellersPanel.customersOpinions.title}
            </h3>
            <GoToIcon className="widget_icon" onClick={onClickWidget}/>
        </div>           
        <div className="opinion-widget_content_choice">
                <button className="opinion-widget_content_choice_option_3 opinion-widget_content_choice_option_clicked">Dziś</button>
                <button className="opinion-widget_content_choice_option_3">Obecny tydzień</button>
                <button className="opinion-widget_content_choice_option_3">Poprzedni tydzień</button>
            </div>
        <div className="opinion-widget_content">
            <Opinion></Opinion>
            <Opinion></Opinion>
            <Opinion></Opinion>
        </div>
    </div>);
}

export default OpinionWidget;