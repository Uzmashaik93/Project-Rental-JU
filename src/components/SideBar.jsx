import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="sidebar-layout">
      {/* Sidebar */}
      <motion.div animate={{ width: isOpen ? 200 : 60 }} className="sidebar">
        {/* Toggle Button (Burger Menu) */}
        <button onClick={() => setIsOpen(!isOpen)} className="burger-menu">
          ☰
        </button>

        {/* Show navigation only when sidebar is open */}
        {isOpen && (
          <div className="navigation">
            <div>
              <NavLink
                to="/"
                onClick={() => setActiveTab("home")}
                className={`nav-item ${activeTab === "home" ? "active" : ""}`}
                style={{ color: "rgba(0, 0, 0, 0.69)" }}
              >
                Home
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/About"
                onClick={() => setActiveTab("about")}
                className={`nav-item ${activeTab === "about" ? "active" : ""}`}
                style={{ color: "rgba(0, 0, 0, 0.69)" }}
              >
                About
              </NavLink>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
