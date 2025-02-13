import logo from "../assets/JU-logo.png";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/">
        <img src={logo} alt="Logo" />
      </NavLink>
      <h2>APPARTMENTS FOR RENTAL</h2>

      <div className="sidebar-container">
        <Sidebar />
      </div>
    </div>
  );
}

export default Navbar;
