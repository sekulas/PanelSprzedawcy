import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LanguageContext from '../../languages/LanguageContext';
import WidgetTypeBox from "../WidgetTypeBox";
import Quality from "./Quality";

const QualityWidget = () => {
    const { dictionary } = useContext(LanguageContext);

    const navigate = useNavigate();

    function onNavigateClicked() {
        navigate("/quality");
    }

    return (
    <div className="widget">
        <WidgetTypeBox widgetType={dictionary.sellersPanel.salesQuality.title} onNavigate={onNavigateClicked}/>
        <Quality></Quality>
    </div>);
}

export default QualityWidget;