import { useState } from "react";
import ListItem from "./ListItem";
import { NavLink } from "react-router-dom";
import CreateNewListing from "../pages/CreateNewListing";

function ListAppartments({ resultList, setResultList }) {
  const deleteList = (aptId) => {
    const updatedList = resultList.filter((apt) => apt.id !== aptId);
    setResultList(updatedList);
  };

  return (
    <div>
      <div className="new-item-container">
        <NavLink to="/CreateNewListing">Create New Listing</NavLink>
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
            <NavLink
              className="navlink"
              key={rentalObj.id}
              to={`/apartmentdetails/${rentalObj.id}`}
            >
              <ListItem
                key={rentalObj.id}
                apt={rentalObj}
                onDelete={deleteList}
              />
            </NavLink>
          ))}
      </div>
    </div>
  );
}

export default ListAppartments;
