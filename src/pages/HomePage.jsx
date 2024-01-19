import QualityWidget from "../features/widgets/quality/QualityWidget";
import OrderWidget from "../features/widgets/orders/OrderWidget"
import ChartWidget from "../features/widgets/chart/ChartWidget";
import RankingWidget from "../features/widgets/offers/RankingWidget";
import OpinionsWidget from "../features/widgets/opinions/OpinionsWidget";

const HomePage = () => {
  return (
    <div id="home-page">
      <div className="home-page_left-column">
        <QualityWidget/>
        <OrderWidget/>
        <RankingWidget/>
      </div>
      <div className="home-page_right-column">
        <ChartWidget/>
        <OpinionsWidget/>
      </div>
    </div>
  );
}

export default HomePage;