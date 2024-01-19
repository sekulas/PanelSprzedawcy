import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as GoToIcon } from "../../../assets/icons/go_to_page.svg";
import LanguageContext from '../../languages/LanguageContext';

const QualityWidget = () => {
    const { dictionary } = useContext(LanguageContext);
    const navigate = useNavigate();
    function onClickWidget() {
        navigate("/quality");
    }
    return (
    <div className="widget">
        <div className="widget_header">
            <h3>
                {dictionary.sellersPanel.salesQuality.title}
            </h3>
            <GoToIcon className="widget_icon" onClick={onClickWidget}/>
        </div>
        <div className="quality-widget_content">
            <div className="quality-widget_content_elem">
                <h3>{dictionary.sellersPanel.salesQuality.qualityCategory}</h3> 
                <h3>S</h3>
            </div>
            <div className="quality-widget_content_elem">
                <h3>{dictionary.sellersPanel.salesQuality.qualityAssessment}</h3>
                <h3>x/y</h3>
            </div>
        </div>
    </div>);
}

export default QualityWidget;