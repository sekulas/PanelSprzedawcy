import { useNavigate } from "react-router-dom";
import WidgetTypeBox from "../WidgetTypeBox";
import { useContext, useState } from "react";
import LanguageContext from '../../languages/LanguageContext';
import ShopContext from "../../multiple-shop-accounts/ShopContext";
import Opinions from "./Opinions";

const OpinionWidget = () => {
    const { dictionary } = useContext(LanguageContext);
    const [period, setPeriod] = useState(0);
    const { shopData } = useContext(ShopContext);

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
        <Opinions></Opinions>
    </div>);
}

export default OpinionWidget;