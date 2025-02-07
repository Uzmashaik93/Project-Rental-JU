import { useState } from "react";
import { useParams } from "react-router-dom";

function EditDetails({ resultList, setResultList }) {
  const { listId } = useParams();
  const [currentApartment, setCurrentApartment] = useState(
    resultList.find((apartmentObj) => {
      return apartmentObj.id == listId;
    })
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const newApartListing = [
      currentApartment,
      ...resultList.filter((apt) => apt.id !== currentApartment.id),
    ];
    setResultList(newApartListing);
  };

  const handleChange = (e) => {
    setCurrentApartment((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Apartment Name
          <input
            type="text"
            name="name"
            placeholder="Apartment name"
            value={currentApartment.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Number of People
          <input
            type="number"
            name="accommodates"
            placeholder="Enter number"
            value={currentApartment.accommodates}
            onChange={handleChange}
          />
        </label>

        <label>
          Number of Bathrooms
          <input
            type="number"
            name="bathrooms"
            placeholder="Number of bathrooms"
            value={currentApartment.bathrooms}
            onChange={handleChange}
          />
        </label>
        <label>
          Number of Bedrooms
          <input
            type="number"
            name="bedrooms"
            placeholder="Number of bedrooms"
            value={currentApartment.bedrooms}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter the Price
          <input
            type="text"
            name="price"
            placeholder="Enter the price"
            value={currentApartment.price}
            onChange={handleChange}
          />
        </label>

        <button className="form-button">Create</button>
      </form>
    </div>
  );
}
export default EditDetails;
