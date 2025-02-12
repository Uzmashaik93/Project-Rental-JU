import { useMemo, useState } from "react";
import ListItem from "../components/ListItem";
import { NavLink } from "react-router-dom";

function ListAppartments({ resultList, setResultList }) {
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    return resultList.filter((item) => {
      return item.name.includes(query.toLowerCase());
    });
  }, [resultList, query]);

  const deleteList = (aptId) => {
    const updatedList = resultList.filter((apt) => apt.id != aptId);
    setResultList(updatedList);
  };

  return (
    <div>
      <div className="new-item-container">
        <label>
          Search:
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="search"
          />
        </label>
        <NavLink to="/CreateNewListing">
          <button className="new-item">Create New Listing</button>
        </NavLink>
      </div>
      <div className="list-container">
        {filteredItems.map((rentalObj) => (
          <div key={rentalObj.id}>
            <ListItem apt={rentalObj} onDelete={deleteList} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListAppartments;
