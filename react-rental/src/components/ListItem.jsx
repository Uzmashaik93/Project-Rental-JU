import { NavLink } from "react-router-dom";
import dummyImage from "../assets/dummyImage.png";
import { motion } from "motion/react";

function ListItem({ apt, onDelete }) {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
    >
      <NavLink className="navlink" to={`/apartmentdetails/${apt.id}`}>
        <img src={apt.picture_url || dummyImage} alt={apt.name} />
      </NavLink>

      <p style={{ textAlign: "center", height: 30 }}>{apt.name}</p>
      <p>Price: {apt.price}</p>
      <button className="delete-button" onClick={() => onDelete(apt.id)}>Delete apartment</button>
    </motion.div>
  );
}

export default ListItem;
