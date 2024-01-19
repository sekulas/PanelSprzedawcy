import { useContext } from "react";
import AuthContext from "../../features/auth/AuthContext";
import LanguageContext from "../../features/languages/LanguageContext"

import LoggedModule from "../navbar/LoggedModule"
import NotLoggedModule from "../navbar/NotLoggedModule";

const Navbar = () => {
  const { isAuthenticated} = useContext(AuthContext);
  const { dictionary } = useContext(LanguageContext);

  return (
    <div id="navbar">
      <h1>{dictionary.navbar.title}</h1>
      {
        isAuthenticated ?
        <LoggedModule/>
        : <NotLoggedModule/>
      }
    </div>
  )
}

export default Navbar;