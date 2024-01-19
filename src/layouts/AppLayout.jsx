import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar"

const AppLayout = () => {

  return (
    <div id="app">
      <Navbar />
      <Outlet />
    </div>
  )

}

export default AppLayout;