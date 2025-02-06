import { results } from "../data/aparments.json";
import { useState } from "react";
import ListItem from "./ListItem";

function ListAppartments() {
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
          <ListItem key={rentalObj.id} apt={rentalObj} onDelete={deleteList} />
        ))}
    </div>
  );
}

export default ListAppartments;
