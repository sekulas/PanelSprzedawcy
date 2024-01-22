import LanguageContext from "../features/languages/LanguageContext"
import { useContext } from "react";
import Quality from "../features/widgets/quality/Quality";

const QualityPage = () => {
    const { dictionary } = useContext(LanguageContext);
    return (
        <div id="quality-page">
            <h1>{dictionary.sellersPanel.salesQuality.title}</h1>
            <Quality></Quality>
        </div>
    );
  }
  
  export default QualityPage;