import ShopContext from "../../multiple-shop-accounts/ShopContext";
import { useContext } from "react";
import LanguageContext from '../../languages/LanguageContext';

const AspectsList = () => {
    const { shopData } = useContext(ShopContext);
    const { dictionary } = useContext(LanguageContext);

    return (
        <div>
            <div class="aspectList__header">
                <h3>{dictionary.sellersPanel.salesQuality.aspects}</h3>
            </div>
            <div class="aspectList__element">
                <p>1. {shopData.quality.aspects[0]}</p>
            </div>
            <div class="aspectList__element">
                <p>2. {shopData.quality.aspects[1]}</p>
            </div>
            <div class="aspectList__element">
                <p>3. {shopData.quality.aspects[2]}</p>
            </div>
        </div>
    )
}

export default AspectsList;