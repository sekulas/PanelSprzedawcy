import Opinion  from "./Opinion";
import { useContext, useEffect, useState } from "react";
import LanguageContext from '../../languages/LanguageContext';
import ShopContext from "../../multiple-shop-accounts/ShopContext";

const Opinions = () => {
const { dictionary } = useContext(LanguageContext);
const [period, setPeriod] = useState(0);
const { shopData } = useContext(ShopContext);
const [opinions, setOpinions] = useState(shopData.opinions.today);

useEffect(() => {
    if(period == 0){
        setOpinions(shopData.opinions.today)
    } else if(period == 1){
        setOpinions(shopData.opinions.thisWeek)
    } else if(period == 2) {
        setOpinions(shopData.opinions.prevWeek)
    }
}, [shopData, period])

const setPeriod0 = () => {
    setPeriod(0)
}

const setPeriod1 = () => {
    setPeriod(1)
}

const setPeriod2 = () => {
    setPeriod(2)
}

return(<div>
    <div className="opinion-widget_content_choice">
        <button className={`opinion-widget_content_choice_option_3 ${period == 0 ? 'opinion-widget_content_choice_option_clicked' : ''}`} onClick={setPeriod0}>{dictionary.sellersPanel.customersOpinions.today}</button>
        <button className={`opinion-widget_content_choice_option_3 ${period == 1 ? 'opinion-widget_content_choice_option_clicked' : ''}`} onClick={setPeriod1}>{dictionary.sellersPanel.customersOpinions.thisWeek}</button>
        <button className={`opinion-widget_content_choice_option_3 ${period == 2 ? 'opinion-widget_content_choice_option_clicked' : ''}`} onClick={setPeriod2}>{dictionary.sellersPanel.customersOpinions.previousWeek}</button>
    </div>
    <div className="opinion-widget_content">
        <Opinion option={opinions[0]}></Opinion>
        <Opinion option={opinions[1]}></Opinion>    
        <Opinion option={opinions[2]}></Opinion>
    </div>
</div>);
}

export default Opinions;