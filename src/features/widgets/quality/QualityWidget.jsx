import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LanguageContext from '../../languages/LanguageContext';
import ShopContext from "../../multiple-shop-accounts/ShopContext";
import WidgetTypeBox from "../WidgetTypeBox";

const QualityWidget = () => {
    const { dictionary } = useContext(LanguageContext);
    const { shopData } = useContext(ShopContext);

    const navigate = useNavigate();

    function onNavigateClicked() {
        navigate("/quality");
    }

    return (
    <div className="widget">
        <WidgetTypeBox widgetType={dictionary.sellersPanel.salesQuality.title} onNavigate={onNavigateClicked}/>
        <div className="quality-widget_content">
            <div className="quality-widget_content_elem">
                <h3>{dictionary.sellersPanel.salesQuality.qualityCategory}</h3> 
                <h3>{shopData.quality.category}</h3>
            </div>
            <div className="quality-widget_content_elem">
                <h3>{dictionary.sellersPanel.salesQuality.qualityAssessment}</h3>
                <h3>{shopData.quality.assessment}</h3>
            </div>
        </div>
    </div>);
}

export default QualityWidget;