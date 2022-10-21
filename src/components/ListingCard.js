import React, {useState} from "react";

function ListingCard({ listing, removeListing }) {

const {id, description, image, location} = listing

const[starFav, setStarFav] = useState(false)

function handleDelete(){
  fetch(`http://localhost:6001/listings/${id}`, {
    method: "DELETE"
  })
    removeListing(id)
}

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {starFav ? (
          <button onClick={() => setStarFav(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setStarFav(true)} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
