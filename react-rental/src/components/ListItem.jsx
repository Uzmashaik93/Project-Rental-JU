function ListItem({ apt, onDelete }) {
  return (
    <div className="rental-card">
      <div>
        <img src={apt.picture_url} alt={apt.name} />
      </div>
      <div className="rendered-description">
        <p>{apt.name}</p>
        <p>Price: {apt.price}</p>
        <button onClick={() => onDelete(apt.id)}>Delete apartment</button>
      </div>
    </div>
  );
}

export default ListItem;
