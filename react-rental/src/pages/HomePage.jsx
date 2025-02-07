import { useState } from "react";
import ListItem from "../components/ListItem";
import { NavLink } from "react-router-dom";

function ListAppartments({ resultList, setResultList }) {
  const deleteList = (aptId) => {
    const updatedList = resultList.filter((apt) => apt.id != aptId);
    setResultList(updatedList);
  };

  return (
    <div>
      <div className="new-item-container">
        <NavLink to="/CreateNewListing">
          <button className="new-item">Create New Listing</button>
        </NavLink>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {resultList
          .filter((rentalObj) => rentalObj.instant_bookable)
          .map((rentalObj) => (
            <div key={rentalObj.id}>
              <ListItem apt={rentalObj} onDelete={deleteList} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default ListAppartments;
