import React from "react";
import Card from "../Card";

const Products = (props) => {
  const { list } = props;
  const currentCards = list.slice(props.firstCard, props.lastCard);

  return (
    <div className="card">
      {currentCards.map((cardItem, index) => {
        return <Card cardItem={cardItem} key={index} />;
      })}
    </div>
  );
};

export default Products;
