import { useContext, useState } from "react";
import LanguageContext from '../../languages/LanguageContext';
import WidgetTypeBox from "../WidgetTypeBox";

const ChartWidget = () => {

    const { dictionary } = useContext(LanguageContext);
    const [obrot, setObrot] = useState(true);
    const [slupkowy, setSlupkowy] = useState(true);
    const [period, setPeriod] = useState(0);

    const setObrotTrue = () => {
        setObrot(true)
    }

    const setObrotFalse = () => {
        setObrot(false)
    }

    const setSlupkowyTrue = () => {
        setSlupkowy(true)
    }

    const setSlupkowyFalse = () => {
        setSlupkowy(false)
    }

    const setPeriod0 = () => {
        setPeriod(0)
    }

    const setPeriod1 = () => {
        setPeriod(1)
    }
    
    const setPeriod2 = () => {
        setPeriod(2)
    }

    return (
    <div className="widget">

        <WidgetTypeBox widgetType={dictionary.sellersPanel.salesChart.title}/>

        <div className="chart-widget_content_menu">
            <div className="chart-widget_content_choice">
                <h3>{dictionary.sellersPanel.salesChart.measurement}</h3>
                <button className={`chart-widget_content_choice_option_2 ${obrot ? 'chart-widget_content_choice_option_clicked' : ""}`} onClick={setObrotTrue}>Obrót</button>
                <button className={`chart-widget_content_choice_option_2 ${!obrot ? 'chart-widget_content_choice_option_clicked' : ""}`} onClick={setObrotFalse}>Sprzedanych</button>
            </div>
            <div className="chart-widget_content_choice">
                <h3>{dictionary.sellersPanel.salesChart.chart}</h3>
                <button className={`chart-widget_content_choice_option_2 ${slupkowy ? 'chart-widget_content_choice_option_clicked' : ""}`} onClick={setSlupkowyTrue}>Słupkowy</button>
                <button className={`chart-widget_content_choice_option_2 ${!slupkowy ? 'chart-widget_content_choice_option_clicked' : ""}`} onClick={setSlupkowyFalse}>Liniowy</button>
            </div>
            <div className="chart-widget_content_choice">
                <h3>{dictionary.sellersPanel.salesChart.period}</h3>
                <button className={`chart-widget_content_choice_option_3 ${period==0 ? 'chart-widget_content_choice_option_clicked' : ""}`} onClick={setPeriod0}>Dziś</button>
                <button className={`chart-widget_content_choice_option_3 ${period==1 ? 'chart-widget_content_choice_option_clicked' : ""}`} onClick={setPeriod1}>Obecny tydzień</button>
                <button className={`chart-widget_content_choice_option_3 ${period==2 ? 'chart-widget_content_choice_option_clicked' : ""}`} onClick={setPeriod2}>Poprzedni tydzień</button>
            </div>
        </div>
        <div className="chart-widget_content_chart">
            <h1>Tu będzie wykres</h1>
        </div>
        
    </div>);
}

export default ChartWidget;