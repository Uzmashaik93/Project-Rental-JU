import { NavLink, useParams } from "react-router-dom";
import dummyImage from "../assets/dummyImage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import EditDetails from "../pages/EditDetailsPage";

function ItemDetail({ apartmentsList }) {
  const { listId } = useParams();

  const apartment = apartmentsList.find((apartmentObj) => {
    return apartmentObj.id == listId;
  });

  return (
    <div className="detail-card">
      <div className="img-container">
        <img src={apartment.picture_url || dummyImage} alt={apartment.name} />
        <NavLink to="/">
          <FontAwesomeIcon
            icon={faArrowAltCircleLeft}
            style={{
              color: "rgba(138, 117, 68, 0.81)",
              fontSize: "2em",
              marginTop: "20px",
            }}
          />
        </NavLink>
      </div>
      <div className="details-container">
        <p>
          <strong>{apartment.name}</strong>
        </p>
        <p>Accommodates: {apartment.accommodates}</p>
        <p>Bathrooms: {apartment.bathrooms ? apartment.bathrooms : "N/A"}</p>
        <p>Bedrooms: {apartment.bedrooms ? apartment.bedrooms : "N/A"}</p>
        <p>
          <strong>Price:</strong> {apartment.price ? apartment.price : "N/A"}
        </p>
        <NavLink
          to={`/EditDetailsPage/${apartment.id}`}
          renderComponent={<EditDetails />}
        >
          <button className="form-button" id="edit-btn">
            Edit
          </button>
        </NavLink>
      </div>
    </div>
  );
}
export default ItemDetail;
