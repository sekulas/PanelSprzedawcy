import { ReactComponent as LightModeIcon } from "../../assets/icons/light_mode.svg";
import LanguageSelector from "../language/LanguageSelector";
import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";

const NotLoggedModule = () => {
  const { dictionary } = useContext(LanguageContext);
  return (
    <div id="navbar-module">
      <div className="navbar-module-child">
        <p>{dictionary.navbar.language}</p>
        <LanguageSelector />
      </div>
        <LightModeIcon />
    </div>
  )
}

export default NotLoggedModule;