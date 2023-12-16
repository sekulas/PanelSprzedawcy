import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import LanguageContext from "../context/LanguageContext";

import LoggedModule from "../components/navbar/LoggedModule";
import NotLoggedModule from "../components/navbar/NotLoggedModule";

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