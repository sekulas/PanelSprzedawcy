import Opinions from "../features/widgets/opinions/Opinions";
import LanguageContext from "../features/languages/LanguageContext";
import { useContext } from "react";

const OpinionsPage = () => {
  const { dictionary } = useContext(LanguageContext);
    return (
      <div id="opinions-page">
        <h1>{dictionary.sellersPanel.customersOpinions.title}</h1>
        <Opinions></Opinions>
      </div>
    );
  }
  
  export default OpinionsPage;