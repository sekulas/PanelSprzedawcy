import ShopContext from "../../multiple-shop-accounts/ShopContext";
import { useContext } from "react";
import LanguageContext from '../../languages/LanguageContext';

const AspectsList = () => {
    const { shopData } = useContext(ShopContext);
    const { dictionary } = useContext(LanguageContext);

    return (
        <div>
            <div class="aspectList__header">
                <h3>Najsłabsze aspekty</h3>
            </div>
            <div class="aspectList__element">
                <p>Najsłabsze aspekty</p>
            </div>
            <div class="aspectList__element">
                <p>Najsłabsze aspekty</p>
            </div>
            <div class="aspectList__element">
                <p>Najsłabsze aspekty</p>
            </div>
        </div>
    )
}

export default AspectsList;