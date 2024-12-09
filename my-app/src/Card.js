import react from "react";
import { useState } from "react";
const Card = ({
  id,
  title,
  ratings,
  count,
  price,
  desc,
  cat,
  image,
  removeItems,
  updateItems,
}) => {
  // const truncatedDesc =
  //   desc.length > 100 ? `${desc.substring(0, 100)}...` : desc;

  // const truncatedTitle =
  //   title.length > 20 ? `${title.substring(0, 20)}...` : title;

  const [isEditing, setIsEditing] = useState(false);
  const [newPrice, setNewPrice] = useState(price);

  const handleUpdateClick = () => {
    if (isEditing) {
      updateItems(id, parseFloat(newPrice));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="div1">
      <h2>{id}</h2>
      <h3>{title}</h3>
      {/* <h4>Ratings: {ratings}</h4>
      <h4>Buyers : {count}</h4>
      <h5>Category: {cat}</h5> */}
      <h4>Price: {price}</h4>
      {/* <p>{truncatedDesc}</p> */}

      <img
        src={image}
        style={{
          width: "200px",
          height: "220px",
        }}
        alt="pic"
      />
      <button
        style={{
          padding: "10px 20px 10px 20px",
          color: "white",
          marginTop: "10px",
          backgroundColor: "black",
          borderRadius: "16px",
          boxShadow: "2px 2px 5px #999",
        }}
        onClick={() => removeItems(id)}
      >
        Remove
      </button>

      <button
        style={{
          padding: "10px 20px",
          marginTop: "10px",
          color: "white",
          backgroundColor: "black",
          borderRadius: "16px",
          boxShadow: "2px 2px 5px #999",
        }}
        onClick={handleUpdateClick}
      >
        {isEditing ? "Done" : "Update"}
      </button>

      {isEditing && (
        <input
          style={{
            width: "150px",
            marginTop: "10px",
            padding: "10px",
            border: "2px solid #000",
            borderRadius: "5px",
          }}
          type="number"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
        />
      )}
    </div>
  );
};

export default Card;
