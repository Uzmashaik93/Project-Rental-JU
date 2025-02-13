import { useMemo, useState } from "react";
import ListItem from "../components/ListItem";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


function ListAppartments({ resultList, setResultList }) {
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    return resultList.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });
  }, [resultList, query]);

  const deleteList = (aptId) => {
    const updatedList = resultList.filter((apt) => apt.id != aptId);
    setResultList(updatedList);
  };

  return (
    <div>
      <div className="new-item-container">
      <div className="search-bar">
        <FontAwesomeIcon icon={faSearch} style={{marginRight:15, marginTop:25, fontSize:"1.3rem", color:"#565555e2"}}/>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="search"
            placeholder="Search for an appartment"
          />
        </div>
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
