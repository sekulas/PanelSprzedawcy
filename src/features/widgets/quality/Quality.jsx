import ShopContext from "../../multiple-shop-accounts/ShopContext";
import { useContext } from "react";
import LanguageContext from '../../languages/LanguageContext';

const Quality = () => {
    const { shopData } = useContext(ShopContext);
    const { dictionary } = useContext(LanguageContext);

    return(<div className="quality-widget_content">
            <div className="quality-widget_content_elem">
                <h3>{dictionary.sellersPanel.salesQuality.qualityCategory}</h3> 
                <h3>{shopData.quality.category}</h3>
            </div>
            <div className="quality-widget_content_elem">
                <h3>{dictionary.sellersPanel.salesQuality.qualityAssessment}</h3>
                <h3>{shopData.quality.assessment}</h3>
            </div>
        </div>);
}

export default Quality;