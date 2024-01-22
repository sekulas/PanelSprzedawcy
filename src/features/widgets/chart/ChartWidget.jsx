import { useContext, useEffect, useState } from "react";
import LanguageContext from '../../languages/LanguageContext';
import WidgetTypeBox from "../WidgetTypeBox";
import LineChart from "./LineChart";
import BarChart from "./ColumnChart";
import { Chart as ChartJS } from "chart.js/auto";
import ShopContext from "../../multiple-shop-accounts/ShopContext";

const ChartWidget = () => {

    const { dictionary } = useContext(LanguageContext);
    const { shopData } = useContext(ShopContext);
    const [obrot, setObrot] = useState(true);
    const [slupkowy, setSlupkowy] = useState(true);
    const [period, setPeriod] = useState(0);
    const [chartData, setChartData] = useState({
        labels: shopData.store.income.today.map((x) => x.label),
        datasets: [{
            data: shopData.store.income.today.map((x) => x.input)
        }]
    });

    useEffect(() => {
        if(obrot) {
            if(period == 0) {
                setChartData({
                    labels: shopData.store.income.today.map((x) => x.label),
                    datasets: [{
                        data: shopData.store.income.today.map((x) => x.input)
                    }]
                });
            } else if(period == 1) {
                setChartData({
                    labels: shopData.store.income.thisWeek.map((x) => x.label),
                    datasets: [{
                        data: shopData.store.income.thisWeek.map((x) => x.input)
                    }]
                });
            } else if(period == 2) {
                setChartData({
                    labels: shopData.store.income.prevWeek.map((x) => x.label),
                    datasets: [{
                        data: shopData.store.income.prevWeek.map((x) => x.input)
                    }]
                });
            }
        } else {
            if(period == 0) {
                setChartData({
                    labels: shopData.store.sold.today.map((x) => x.label),
                    datasets: [{
                        data: shopData.store.sold.today.map((x) => x.input)
                    }]
                });
            } else if(period == 1) {
                setChartData({
                    labels: shopData.store.sold.thisWeek.map((x) => x.label),
                    datasets: [{
                        data: shopData.store.sold.thisWeek.map((x) => x.input)
                    }]
                });
            } else if(period == 2) {
                setChartData({
                    labels: shopData.store.sold.prevWeek.map((x) => x.label),
                    datasets: [{
                        data: shopData.store.sold.prevWeek.map((x) => x.input)
                    }]
                });
            }
        }
    }, [shopData])

    const setObrotTrue = () => {
        setObrot(true)
        if(period == 0) {
            setChartData({
                labels: shopData.store.income.today.map((x) => x.label),
                datasets: [{
                    data: shopData.store.income.today.map((x) => x.input)
                }]
            });
        } else if(period == 1) {
            setChartData({
                labels: shopData.store.income.thisWeek.map((x) => x.label),
                datasets: [{
                    data: shopData.store.income.thisWeek.map((x) => x.input)
                }]
            });
        } else if(period == 2) {
            setChartData({
                labels: shopData.store.income.prevWeek.map((x) => x.label),
                datasets: [{
                    data: shopData.store.income.prevWeek.map((x) => x.input)
                }]
            });
        }
    }

    const setObrotFalse = () => {
        setObrot(false)
        if(period == 0) {
            setChartData({
                labels: shopData.store.sold.today.map((x) => x.label),
                datasets: [{
                    data: shopData.store.sold.today.map((x) => x.input)
                }]
            });
        } else if(period == 1) {
            setChartData({
                labels: shopData.store.sold.thisWeek.map((x) => x.label),
                datasets: [{
                    data: shopData.store.sold.thisWeek.map((x) => x.input)
                }]
            });
        } else if(period == 2) {
            setChartData({
                labels: shopData.store.sold.prevWeek.map((x) => x.label),
                datasets: [{
                    data: shopData.store.sold.prevWeek.map((x) => x.input)
                }]
            });
        }
    }

    const setSlupkowyTrue = () => {
        setSlupkowy(true)
    }

    const setSlupkowyFalse = () => {
        setSlupkowy(false)
    }

    const setPeriod0 = () => {
        setPeriod(0);
        if(obrot) {
        setChartData({
            labels: shopData.store.income.today.map((x) => x.label),
            datasets: [{
                data: shopData.store.income.today.map((x) => x.input)
            }]
        });
    } else {
        setChartData({
            labels: shopData.store.sold.today.map((x) => x.label),
            datasets: [{
                data: shopData.store.sold.today.map((x) => x.input)
            }]
        });
    }
    }

    const setPeriod1 = () => {
        setPeriod(1);
        if(obrot){
        setChartData({
            labels: shopData.store.income.thisWeek.map((x) => x.label),
            datasets: [{
                data: shopData.store.income.thisWeek.map((x) => x.input)
            }]
        });
    } else {
        setChartData({
            labels: shopData.store.sold.thisWeek.map((x) => x.label),
            datasets: [{
                data: shopData.store.sold.thisWeek.map((x) => x.input)
            }]
        });
    }
    }
    
    const setPeriod2 = () => {
        setPeriod(2);
        if(obrot) {
        setChartData({
            labels: shopData.store.income.prevWeek.map((x) => x.label),
            datasets: [{
                data: shopData.store.income.prevWeek.map((x) => x.input)
            }]
        });
    }
    else {
        setChartData({
            labels: shopData.store.sold.prevWeek.map((x) => x.label),
            datasets: [{
                data: shopData.store.sold.prevWeek.map((x) => x.input)
            }]
        });
    }
}

    return (
    <div className="widget">

        <WidgetTypeBox widgetType={dictionary.sellersPanel.salesChart.title}/>

        <div className="chart-widget_content_menu">
            <div className="chart-widget_content_choice">
                <h3>{dictionary.sellersPanel.salesChart.measurement}</h3>
                <button className={`chart-widget_content_choice_option_2 ${obrot ? 'chart-widget_content_choice_option_clicked' : ""}`} onClick={setObrotTrue}>{dictionary.sellersPanel.salesChart.income}</button>
                <button className={`chart-widget_content_choice_option_2 ${!obrot ? 'chart-widget_content_choice_option_clicked' : ""}`} onClick={setObrotFalse}>{dictionary.sellersPanel.salesChart.sold}</button>
            </div>
            <div className="chart-widget_content_choice">
                <h3>{dictionary.sellersPanel.salesChart.chart}</h3>
                <button className={`chart-widget_content_choice_option_2 ${slupkowy ? 'chart-widget_content_choice_option_clicked' : ""}`} onClick={setSlupkowyTrue}>{dictionary.sellersPanel.salesChart.columnar}</button>
                <button className={`chart-widget_content_choice_option_2 ${!slupkowy ? 'chart-widget_content_choice_option_clicked' : ""}`} onClick={setSlupkowyFalse}>{dictionary.sellersPanel.salesChart.linear}</button>
            </div>
            <div className="chart-widget_content_choice">
                <h3>{dictionary.sellersPanel.salesChart.period}</h3>
                <button className={`chart-widget_content_choice_option_3 ${period==0 ? 'chart-widget_content_choice_option_clicked' : ""}`} onClick={setPeriod0}>{dictionary.sellersPanel.salesChart.today}</button>
                <button className={`chart-widget_content_choice_option_3 ${period==1 ? 'chart-widget_content_choice_option_clicked' : ""}`} onClick={setPeriod1}>{dictionary.sellersPanel.salesChart.thisWeek}</button>
                <button className={`chart-widget_content_choice_option_3 ${period==2 ? 'chart-widget_content_choice_option_clicked' : ""}`} onClick={setPeriod2}>{dictionary.sellersPanel.salesChart.previousWeek}</button>
            </div>
        </div>
        <div className="chart-widget_content_chart">
            { !slupkowy ?  <LineChart data={chartData}/>
            : <BarChart data={chartData} />}
        </div>
        
    </div>);
}

export default ChartWidget;