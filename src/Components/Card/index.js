import React, { useState, useEffect } from "react";

const Card = ({ cardItem, type }) => {
  const [viewDetails, setViewDetails] = useState(false);
  const [liked, setLiked] = useState(false);
  const handleViewDetails = () => {
    setViewDetails(!viewDetails);
  };
  let likedCards;
  likedCards = JSON.parse(localStorage.getItem("likedItems")) || [];
  cardItem.liked = liked;

  const handleLiked = () => {
    setLiked(!liked);
    cardItem.liked = liked;
    likedCards = JSON.parse(localStorage.getItem("likedItems")) || [];
    console.log(likedCards);
    console.log(likedCards);

    let index;
    for (let i = 0; i < likedCards.length; i++) {
      if (likedCards[i].id === cardItem.id) {
        index = i;
        break;
      }
    }
    if (index > -1) {
      likedCards.splice(index, 1);
      console.log("It exists");
    } else {
      likedCards.push(cardItem);
    }
    localStorage.setItem("likedItems", JSON.stringify(likedCards));
  };
  useEffect(() => {
    for (let i = 0; i < likedCards.length; i++) {
      if (likedCards[i].id === cardItem.id) {
        setLiked(true);
        break;
      }
    }
  }, []);

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
        {type !== "likes" ? (
          <i
            className={`far fa-heart ${liked ? " red" : " black"}`}
            onClick={handleLiked}
          ></i>
        ) : null}

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
