import { ReactComponent as LightModeIcon } from "../../assets/icons/light_mode.svg";
import LanguageSelector from "../../features/languages/LanguageSelector";
import { useContext } from "react";
import LanguageContext from "../../features/languages/LanguageContext";

const NotLoggedModule = () => {
  const { dictionary } = useContext(LanguageContext);
  return (
    <div id="navbar-module">
      <div className="navbar-module-child">
        <p>{dictionary.navbar.language}</p>
        <LanguageSelector />
      </div>
        <LightModeIcon />
        <button style={{visibility: "hidden"}}>{dictionary.navbar.logout}</button>
    </div>
  )
}

export default NotLoggedModule;