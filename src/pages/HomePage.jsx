import QualityWidget from "../components/widget/QualityWidget"
import OrderWidget from "../components/widget/OrderWidget"
import ChartWidget from "../components/widget/ChartWidget";
import RankingWidget from "../components/widget/RankingWidget";
import OpinionWidget from "../components/widget/OpinionWidget";
const HomePage = () => {
  return (
    <div id="home-page">
        <QualityWidget></QualityWidget>
        <OrderWidget></OrderWidget>
        <RankingWidget></RankingWidget>
        <ChartWidget></ChartWidget>
        <OpinionWidget></OpinionWidget>
    </div>
  );
}

export default HomePage;