import React, { useState, useEffect } from "react";
import Card from "../Card/index";
const LikedItems = () => {
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    setLikes(JSON.parse(localStorage.getItem("likedItems")));
  }, []);

  return (
    <div className="card">
      {likes ? (
        likes.map((cardItem) => {
          return <Card cardItem={cardItem} type="likes" />;
        })
      ) : (
        <div>You have 0 likes </div>
      )}
    </div>
  );
};
export default LikedItems;
