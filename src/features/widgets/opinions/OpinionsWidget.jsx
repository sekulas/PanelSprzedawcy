import Opinion  from "./Opinion"
import { useNavigate } from "react-router-dom";
import WidgetTypeBox from "../WidgetTypeBox";
import { useContext } from "react";
import LanguageContext from '../../languages/LanguageContext';

const OpinionWidget = () => {
    const { dictionary } = useContext(LanguageContext);

    const navigate = useNavigate();

    function onNavigateClicked() {
        navigate("/opinion");
    }

    return (
    <div className="widget" >
        <WidgetTypeBox widgetType={dictionary.sellersPanel.customersOpinions.title} onNavigate={onNavigateClicked}/>      
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