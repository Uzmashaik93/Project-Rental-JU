import { NavLink } from "react-router-dom";
import dummyImage from "../assets/dummyImage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ListItem({ apt, onDelete }) {
  return (
    <div className="card">
      <img src={apt.picture_url || dummyImage} alt={apt.name} />
      <p style={{ textAlign: "center", height: 30 }}>{apt.name}</p>
      <p>Price: {apt.price ? apt.price : "N/A"}</p>
      <div className="buttons-container">
        <NavLink className="navlink" to={`/apartmentdetails/${apt.id}`}>
          <button className="see-details-btn">See details</button>
        </NavLink>
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => onDelete(apt.id)}
          className="delete-button"
        />
      </div>
    </div>
  );
}

export default ListItem;

//      <icon className="delete-button" onClick={() => onDelete(apt.id)}>Delete apartment</icon>
