import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

function CreateNewListing({ resultList, setResultList }) {
  const [name, setName] = useState("");
  const [accommodates, setAccomodates] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newListing = {
      name: name,
      accomodates: accommodates,
      bathrooms: bathrooms,
      bedrooms: bedrooms,
      price: price,
      instant_bookable: true,
      picture_url: "",
      id: uuid(),
    };

    const newApartListing = [newListing, ...resultList];
    setResultList(newApartListing);

    // clear form
    setName("");
    setAccomodates("");
    setBathrooms("");
    setBedrooms("");
    setPrice("");
    navigate("/");
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
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>

        <label>
          Number of People
          <input
            type="number"
            name="accomodates"
            placeholder="Enter number"
            value={accommodates}
            onChange={(e) => {
              setAccomodates(e.target.value);
            }}
          />
        </label>

        <label>
          Number of Bathrooms
          <input
            type="number"
            name="bathrooms"
            placeholder="Number of bathrooms"
            value={bathrooms}
            onChange={(e) => {
              setBathrooms(e.target.value);
            }}
          />
        </label>
        <label>
          Number of Bedrooms
          <input
            type="number"
            name="bedrooms"
            placeholder="Number of bedrooms"
            value={bedrooms}
            onChange={(e) => {
              setBedrooms(e.target.value);
            }}
          />
        </label>
        <label>
          Enter the Price
          <input
            type="text"
            name="price"
            placeholder="Enter the price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </label>

        <button className="form-button">Create</button>
      </form>
    </div>
  );
}
export default CreateNewListing;
