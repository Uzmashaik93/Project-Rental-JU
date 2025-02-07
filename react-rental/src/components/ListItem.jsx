import dummyImage from "../assets/dummyImage.png";

function ListItem({ apt, onDelete }) {
  return (
    <div className="card">
      <div className="rental-card">
        <div className="wrapper">
          <img src={apt.picture_url || dummyImage} alt={apt.name} />

          <p>{apt.name}</p>
          <p>Price: {apt.price}</p>
          <button onClick={() => onDelete(apt.id)}>Delete apartment</button>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
