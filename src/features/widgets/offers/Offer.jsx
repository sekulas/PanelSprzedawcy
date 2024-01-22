const Offer = (props) => {
    return (
        <div className="offer">
            <div className="ranking-widget_table-column-photo ranking-widget_table-cell">
                <h3>{props.photo}</h3>
            </div>
            <div className="ranking-widget_table-column-name ranking-widget_table-cell">
                <h3>{props.name}</h3>
            </div>
            <div className="ranking-widget_table-column-sold-amount ranking-widget_table-cell">
                <h3>{props.soldAmount}</h3>
            </div>
            <div className="ranking-widget_table-column-displayed-amount ranking-widget_table-cell">
                <h3>{props.displayedAmount}</h3>
            </div>
        </div>
    );
}

export default Offer;