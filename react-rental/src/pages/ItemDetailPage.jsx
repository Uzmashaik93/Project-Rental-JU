import { useParams } from "react-router-dom";

function ItemDetail({ apartmentsList }) {
  const { listId } = useParams();

  const apartment = apartmentsList.find((apartmentObj) => {
    return apartmentObj.id === parseInt(listId);
  });
  console.log(apartment);

  return (
    <div className="card">
      <div className="rental-card">
        <div className="wrapper">
          <img src={apartment.picture_url} alt={apartment.name} />
          <p>{apartment.name}</p>
          <p>Type: {apartment.property_type}</p>
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
