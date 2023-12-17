import QualityWidget from "../components/widget/QualityWidget"
import OrderWidget from "../components/widget/OrderWidget"
import ChartWidget from "../components/widget/ChartWidget";
import RankingWidget from "../components/widget/RankingWidget";
import OpinionWidget from "../components/widget/OpinionWidget";
const HomePage = () => {
  return (
    <div id="home-page">
      <div className="home-page_left-column">
        <QualityWidget></QualityWidget>
        <OrderWidget></OrderWidget>
        <RankingWidget></RankingWidget>
      </div>
      <div className="home-page_right-column">
        <ChartWidget></ChartWidget>
        <OpinionWidget></OpinionWidget>
      </div>
    </div>
  );
}

export default HomePage;