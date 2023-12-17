const ChartWidget = () => {
    return (
    <div className="widget">
        <div className="widget_header">
            <h3>
                Wykres sprzedaży
            </h3>
        </div>
        <div className="chart-widget_content_menu">
            <div className="chart-widget_content_choice">
                <h3>Miara</h3>
                <button className="chart-widget_content_choice_option_2 chart-widget_content_choice_option_clicked">Obrót</button>
                <button className="chart-widget_content_choice_option_2">Sprzedanych</button>
            </div>
            <div className="chart-widget_content_choice">
                <h3>Wykres</h3>
                <button className="chart-widget_content_choice_option_2 chart-widget_content_choice_option_clicked">Słupkowy</button>
                <button className="chart-widget_content_choice_option_2">Liniowy</button>
            </div>
            <div className="chart-widget_content_choice">
                <h3>Zakres czasu</h3>
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