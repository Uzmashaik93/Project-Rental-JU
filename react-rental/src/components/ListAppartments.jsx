import { results } from "../data/aparments.json";
import { useState } from "react";

function ListAppartments() {

const [resultList, setResultList] = useState(results)

const deleteList = (aptId) => {
    const updatedList = resultList.filter((apt) => apt.id !== aptId)
    setResultList(updatedList)
}

  console.log(results.price);
  return (
    <div>
      {resultList
        .filter((rentalObj) => rentalObj.instant_bookable)
        .map((rentalObj) => (
            <div key={rentalObj.id} className="rental-card">
                 <div><img src={rentalObj.picture_url} alt={rentalObj.name}/></div>
               <div className="rendered-description">
               <p>{rentalObj.name}</p>
                <p>Type: {rentalObj.property_type}</p>
                <p>Accomodates: {rentalObj.accommodates}</p>
                <p>Bathrooms: {rentalObj.bathrooms}</p>
                <p>Bedrooms: {rentalObj.bedrooms}</p>
                <p>Price: {rentalObj.price}</p>
                <button onClick={() => {deleteList(rentalObj.id)}}>Delete appartment</button>
               </div>
            </div>
        ))}
    </div>
  );
}

export default ListAppartments;
