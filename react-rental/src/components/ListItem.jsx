import { NavLink } from "react-router-dom";
import dummyImage from "../assets/dummyImage.png";

function ListItem({ apt, onDelete }) {
  return (
    <div className="card">
      <div className="rental-card">
        <div className="wrapper">
          <NavLink className="navlink" to={`/apartmentdetails/${apt.id}`}>
            <img src={apt.picture_url || dummyImage} alt={apt.name} />
          </NavLink>

          <p>{apt.name}</p>
          <p>Price: {apt.price}</p>
          <button className="delete-button" onClick={() => onDelete(apt.id)}>Delete apartment</button>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
