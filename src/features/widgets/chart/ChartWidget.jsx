import { useContext } from "react";
import LanguageContext from '../../languages/LanguageContext';
const ChartWidget = () => {
    const { dictionary } = useContext(LanguageContext);
    return (
    <div className="widget">
        <div className="widget_header">
            <h3>
                {dictionary.sellersPanel.salesChart.title}
            </h3>
        </div>
        <div className="chart-widget_content_menu">
            <div className="chart-widget_content_choice">
                <h3>{dictionary.sellersPanel.salesChart.measurement}</h3>
                <button className="chart-widget_content_choice_option_2 chart-widget_content_choice_option_clicked">Obrót</button>
                <button className="chart-widget_content_choice_option_2">Sprzedanych</button>
            </div>
            <div className="chart-widget_content_choice">
                <h3>{dictionary.sellersPanel.salesChart.chart}</h3>
                <button className="chart-widget_content_choice_option_2 chart-widget_content_choice_option_clicked">Słupkowy</button>
                <button className="chart-widget_content_choice_option_2">Liniowy</button>
            </div>
            <div className="chart-widget_content_choice">
                <h3>{dictionary.sellersPanel.salesChart.period}</h3>
                <button className="chart-widget_content_choice_option_3 chart-widget_content_choice_option_clicked">Dziś</button>
                <button className="chart-widget_content_choice_option_3">Obecny tydzień</button>
                <button className="chart-widget_content_choice_option_3">Poprzedni tydzień</button>
            </div>
        </div>
        <div className="chart-widget_content_chart">
            <h1>Tu będzie wykres</h1>
        </div>
        
    </div>);
}

export default ChartWidget;