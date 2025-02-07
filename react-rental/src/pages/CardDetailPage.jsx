import { useParams } from "react-router-dom";
import dummyImage from "../assets/dummyImage.png";

function ItemDetail({ apartmentsList }) {
  const { listId } = useParams();

  const apartment = apartmentsList.find((apartmentObj) => {
    return apartmentObj.id == listId;
  });

  return (
    <div className="card">
      <div className="rental-card">
        <div className="wrapper">
          <img src={apartment.picture_url || dummyImage} alt={apartment.name} />
          <p>{apartment.name}</p>
          <p>Accommodates: {apartment.accommodates}</p>
          <p>Bathrooms: {apartment.bathrooms}</p>
          <p>Bedrooms: {apartment.bedrooms}</p>
          <p>Price: {apartment.price}</p>
        </div>
      </div>
    </div>
  );
}
export default ItemDetail;
