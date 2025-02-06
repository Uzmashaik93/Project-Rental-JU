import logo from "../assets/JU-logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <h3>APPARTMENTS FOR RENTAL</h3>

      <NavLink to="/">Home</NavLink>
      <NavLink to="/About">About</NavLink>
    </div>
  );
}

export default Navbar;
