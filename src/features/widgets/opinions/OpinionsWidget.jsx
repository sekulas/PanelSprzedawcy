import Opinion  from "./Opinion"
import { useNavigate } from "react-router-dom";
import WidgetTypeBox from "../WidgetTypeBox";
import { useContext, useState } from "react";
import LanguageContext from '../../languages/LanguageContext';

const OpinionWidget = () => {
    const { dictionary } = useContext(LanguageContext);
    const [period, setPeriod] = useState(0);

    const setPeriod0 = () => {
        setPeriod(0)
    }

    const setPeriod1 = () => {
        setPeriod(1)
    }
    
    const setPeriod2 = () => {
        setPeriod(2)
    }

    const navigate = useNavigate();

    function onNavigateClicked() {
        navigate("/opinion");
    }

    return (
    <div className="widget" >
        <WidgetTypeBox widgetType={dictionary.sellersPanel.customersOpinions.title} onNavigate={onNavigateClicked}/>      
        <div className="opinion-widget_content_choice">
                <button className={`opinion-widget_content_choice_option_3 ${period == 0 ? 'opinion-widget_content_choice_option_clicked' : ''}`} onClick={setPeriod0}>Dziś</button>
                <button className={`opinion-widget_content_choice_option_3 ${period == 1 ? 'opinion-widget_content_choice_option_clicked' : ''}`} onClick={setPeriod1}>Obecny tydzień</button>
                <button className={`opinion-widget_content_choice_option_3 ${period == 2 ? 'opinion-widget_content_choice_option_clicked' : ''}`} onClick={setPeriod2}>Poprzedni tydzień</button>
            </div>
        <div className="opinion-widget_content">
            <Opinion></Opinion>
            <Opinion></Opinion>
            <Opinion></Opinion>
        </div>
    </div>);
}

export default OpinionWidget;