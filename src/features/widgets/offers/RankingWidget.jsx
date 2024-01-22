import Offer from "./Offer";
import { useContext, useState } from "react";
import LanguageContext from '../../languages/LanguageContext';
import WidgetTypeBox from "../WidgetTypeBox";

const RankingWidget = () => {
    const { dictionary } = useContext(LanguageContext);
    const [mostOftenChosen, setMostOftenChosen] = useState(true);

    const handleClick = () => {
        setMostOftenChosen(!mostOftenChosen);
    };

    return (
    <div className="widget">
        <WidgetTypeBox widgetType={dictionary.sellersPanel.offersRanking.title}/>
        <div className="ranking-widget_content_choice">
            <h3 className="ranking-widget_content_choice_name_3">Kupowane</h3>
            <button
                className={`ranking-widget_content_choice_option_3 ${
                    mostOftenChosen ? 'ranking-widget_content_choice_option_clicked' : ''}`}
                onClick={handleClick}
            >
                Najczesciej
            </button>
            <button
                className={`ranking-widget_content_choice_option_3 ${
                    !mostOftenChosen ? 'ranking-widget_content_choice_option_clicked' : ''}`}
                onClick={handleClick}
            >
                Najrzadziej
            </button>
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
            <Offer name="name" photo="photo" soldAmount="25" displayedAmount="100"></Offer>
            <Offer name="name" photo="photo" soldAmount="25" displayedAmount="100"></Offer>
            <Offer name="name" photo="photo" soldAmount="25" displayedAmount="100"></Offer>
            <Offer name="name" photo="photo" soldAmount="25" displayedAmount="100"></Offer>
            <Offer name="name" photo="photo" soldAmount="25" displayedAmount="100"></Offer>
        </div>
        
        </div>
    </div>);
}

export default RankingWidget;