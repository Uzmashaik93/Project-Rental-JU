import { useState } from "react";
import ListItem from "./ListItem";
import { NavLink } from "react-router-dom";

function ListAppartments({ results }) {
  const [resultList, setResultList] = useState(results);

  const deleteList = (aptId) => {
    const updatedList = resultList.filter((apt) => apt.id !== aptId);
    setResultList(updatedList);
  };

  return (
    <div>
      {resultList
        .filter((rentalObj) => rentalObj.instant_bookable)
        .map((rentalObj) => (
          <NavLink key={rentalObj.id} to={`/apartmentdetails/${rentalObj.id}`}>
            <ListItem
              key={rentalObj.id}
              apt={rentalObj}
              onDelete={deleteList}
            />
          </NavLink>
        ))}
    </div>
  );
}

export default ListAppartments;
