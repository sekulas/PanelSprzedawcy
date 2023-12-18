import Offer from "../offer/Offer";
import { useContext } from "react";
import LanguageContext from '../../context/LanguageContext';
const RankingWidget = () => {
    const { dictionary } = useContext(LanguageContext);
    return (
    <div className="widget">
        <div className="widget_header">
            <h3>
                {dictionary.sellersPanel.offersRanking.title}
            </h3>
        </div>
        <div className="ranking-widget_content_choice">
            <h3 className="ranking-widget_content_choice_name_3">Kupowane</h3>
            <button className="ranking-widget_content_choice_option_3 ranking-widget_content_choice_option_clicked">Najczesciej</button>
            <button className="ranking-widget_content_choice_option_3">Najrzadziej</button>
        </div>
        <div className="ranking-widget_table">
        <div className="ranking-widget_table_header">
            <div className="ranking-widget_table-column-photo ranking-widget_table-cell">
                <h3>{dictionary.sellersPanel.offersRanking.photo}</h3>
            </div>
            <div className="ranking-widget_table-column-name ranking-widget_table-cell">
                <h3>{dictionary.sellersPanel.offersRanking.name}</h3>
            </div>
            <div className="ranking-widget_table-column-sold-amount ranking-widget_table-cell">
                <h3>{dictionary.sellersPanel.offersRanking.sold}</h3>
            </div>
            <div className="ranking-widget_table-column-displayed-amount ranking-widget_table-cell">
                <h3>{dictionary.sellersPanel.offersRanking.uniqueViews}</h3>
            </div>
        </div>
        <div className="ranking-widget_table_body">
            <Offer></Offer>
            <Offer></Offer>
            <Offer></Offer>
            <Offer></Offer>
            <Offer></Offer>
        </div>
        
        </div>
    </div>);
}

export default RankingWidget;