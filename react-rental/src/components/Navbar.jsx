import logo from "../assets/JU-logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/">
      <img src={logo} alt="Logo" />
      </NavLink>
      <h2>APPARTMENTS FOR RENTAL</h2>

    <div className="sidebar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/About">About</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
