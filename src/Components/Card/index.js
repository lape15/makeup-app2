import React, { useState } from "react";

const Card = ({ cardItem }) => {
  const [viewDetails, setViewDetails] = useState(false);
  const handleViewDetails = () => {
    setViewDetails(!viewDetails);
  };

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
        <button className="details" onClick={handleViewDetails}>
          Details
        </button>
        <div className={`div  ${viewDetails ? "show" : "hide"} `}>
          <div className="desc">
            <span>Description</span>
            <div className="value">{cardItem.description}</div>
            <span>website</span>
            <div className="value pointer">{cardItem.website_link}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
