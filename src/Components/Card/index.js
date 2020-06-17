import React from "react";

const Card = ({ cardItem }) => {
  return (
    <div className="card-item" key={cardItem.id}>
      <img
        src={cardItem.api_featured_image}
        className="card-img"
        alt="card-img"
      />
      <div className="card-details">
        <div className="desc">
          <div className="value b">{cardItem.name}</div>
        </div>
        <div className="desc">
          <div className="value">
            <span className="a"> &#36;</span>
            {cardItem.price}
          </div>
        </div>
        <i className="far fa-heart"></i>
      </div>
    </div>
  );
};

export default Card;
