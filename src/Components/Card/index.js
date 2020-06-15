import React from "react";

const Card = (props) => {
  const { list } = props;
  let card = [];
  //   console.log(props.list);
  return (
    <div className="card">
      {list.map((cardItem) => {
        return (
          <div className="card-item" key={cardItem.id}>
            <img
              src={cardItem.api_featured_image}
              className="card-img"
              alt="card-img"
            />
            <div className="card-detials">
              <i className="far fa-heart"></i>
              <div className="desc">
                <div className="title">Name</div>
                <div className="value">{cardItem.name}</div>
              </div>
              <div className="desc">
                <div className="title">Brand</div>
                <div className="value">{cardItem.brand}</div>
              </div>
              <div className="desc">
                <div className="title">Category</div>
                {cardItem.category ? (
                  <div className="value">{cardItem.category}</div>
                ) : (
                  <div className="value">N/A</div>
                )}
              </div>

              <div className="desc">
                <div className="title">Type</div>
                <div className="value">{cardItem.product_type}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
