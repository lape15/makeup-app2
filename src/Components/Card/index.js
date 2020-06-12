import React from "react";

const Card = (props) => {
  const { list } = props;
  let card = [];
  console.log(props.list);
  return (
    <div className="card">
      {list.map((listItem) => {
        return (
          <div className="card-item" key={listItem.id}>
            <img
              src={listItem.api_featured_image}
              className="card-img"
              alt="card-img"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Card;
