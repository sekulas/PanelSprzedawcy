import Offer from "./Offer";
import { useContext, useEffect, useState } from "react";
import LanguageContext from '../../languages/LanguageContext';
import WidgetTypeBox from "../WidgetTypeBox";
import ShopContext from "../../multiple-shop-accounts/ShopContext";

const RankingWidget = () => {
    const { dictionary } = useContext(LanguageContext);
    const [mostOftenChosen, setMostOftenChosen] = useState(true);
    const { shopData } = useContext(ShopContext);
    const [offers, setOffers] = useState(shopData.offers.common);

    useEffect(() => {
        if(mostOftenChosen) {
            setOffers(shopData.offers.common)
        } else {
            setOffers(shopData.offers.rare)
        }
    },[shopData, mostOftenChosen])

    const handleClick = () => {
        setMostOftenChosen(!mostOftenChosen);
    };

    return (
    <div className="widget">
        <WidgetTypeBox widgetType={dictionary.sellersPanel.offersRanking.title}/>
        <div className="ranking-widget_content_choice">
            <h3 className="ranking-widget_content_choice_name_3">{dictionary.sellersPanel.offersRanking.purchased}</h3>
            <button
                className={`ranking-widget_content_choice_option_3 ${
                    mostOftenChosen ? 'ranking-widget_content_choice_option_clicked' : ''}`}
                onClick={handleClick}
            >
                {dictionary.sellersPanel.offersRanking.mostCommon}
            </button>
            <button
                className={`ranking-widget_content_choice_option_3 ${
                    !mostOftenChosen ? 'ranking-widget_content_choice_option_clicked' : ''}`}
                onClick={handleClick}
            >
                {dictionary.sellersPanel.offersRanking.leastOften}
            </button>
        </div>
        <div className="ranking-widget_table">
        <div className="ranking-widget_table_header">
            <div className="ranking-widget_table-column-photo ranking-widget_table-cell">
                <p>{dictionary.sellersPanel.offersRanking.photo}</p>
            </div>
            <div className="ranking-widget_table-column-name ranking-widget_table-cell">
                <p>{dictionary.sellersPanel.offersRanking.name}</p>
            </div>
            <div className="ranking-widget_table-column-sold-amount ranking-widget_table-cell">
                <p>{dictionary.sellersPanel.offersRanking.sold}</p>
            </div>
            <div className="ranking-widget_table-column-displayed-amount ranking-widget_table-cell">
                <p>{dictionary.sellersPanel.offersRanking.uniqueViews}</p>
            </div>
        </div>
        <div className="ranking-widget_table_body">
            <Offer offer={offers[0]}></Offer>
            <Offer offer={offers[1]}></Offer>
            <Offer offer={offers[2]}></Offer>
            <Offer offer={offers[3]}></Offer>
        </div>
        
        </div>
    </div>);
}

export default RankingWidget;