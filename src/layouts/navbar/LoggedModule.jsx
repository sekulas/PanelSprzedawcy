import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { ReactComponent as LightModeIcon } from "../../assets/icons/light_mode.svg";
import { ReactComponent as AccountIcon } from "../../assets/icons/account.svg"
import LanguageSelector from "../../features/languages/LanguageSelector";
import { useContext } from "react";
import AuthContext from "../../features/auth/AuthContext";
import LanguageContext from "../../features/languages/LanguageContext";
import ShopSelector from "../../features/multiple-shop-accounts/ShopSelector";

const LoggedModule = () => {
  const { username, logout } = useContext(AuthContext);
  const { dictionary } = useContext(LanguageContext);

  return (
    <div id="navbar-module">
      <div className="navbar-module-child">
        <UserIcon />
        {username.toUpperCase()}
      </div>
      <div className="navbar-module-child">
        <AccountIcon />
        <ShopSelector/>
      </div>
      <div className="navbar-module-child">
        <p>{dictionary.navbar.language}</p>
        <LanguageSelector />
      </div>
        <LightModeIcon />
      <button onClick={logout} className="log-out-button">{dictionary.navbar.logout}</button>
    </div>
  )
}

export default LoggedModule;