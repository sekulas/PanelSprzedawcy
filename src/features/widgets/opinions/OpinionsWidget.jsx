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
                <button className={`opinion-widget_content_choice_option_3 ${period == 0 ? 'opinion-widget_content_choice_option_clicked' : ''}`} onClick={setPeriod0}>{dictionary.sellersPanel.customersOpinions.today}</button>
                <button className={`opinion-widget_content_choice_option_3 ${period == 1 ? 'opinion-widget_content_choice_option_clicked' : ''}`} onClick={setPeriod1}>{dictionary.sellersPanel.customersOpinions.thisWeek}</button>
                <button className={`opinion-widget_content_choice_option_3 ${period == 2 ? 'opinion-widget_content_choice_option_clicked' : ''}`} onClick={setPeriod2}>{dictionary.sellersPanel.customersOpinions.previousWeek}</button>
            </div>
        <div className="opinion-widget_content">
            <Opinion note="5" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></Opinion>
            <Opinion note="5" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></Opinion>    
            <Opinion note="5" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></Opinion>
        
        </div>
    </div>);
}

export default OpinionWidget;