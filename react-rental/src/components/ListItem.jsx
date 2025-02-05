
import React from 'react';

function ListItem({ apt, onDelete }) {
    return (
      <li className="rental-card">
        <div>
          <img src={apt.picture_url} alt={apt.name} />
        </div>
        <div className="rendered-description">
          <p>{apt.name}</p>
          <p>Type: {apt.property_type}</p>
          <p>Accommodates: {apt.accommodates}</p>
          <p>Bathrooms: {apt.bathrooms}</p>
          <p>Bedrooms: {apt.bedrooms}</p>
          <p>Price: {apt.price}</p>
          <button onClick={() => onDelete(apt.id)}>Delete apartment</button>
        </div>
      </li>
    );
  }
  
  export default ListItem;