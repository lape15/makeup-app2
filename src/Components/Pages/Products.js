import React from "react";
import Card from "../Card";

const Products = (props) => {
  const { list } = props;

  return (
    <div className="card">
      {list.map((cardItem, index) => {
        return <Card cardItem={cardItem} key={index} />;
      })}
    </div>
  );
};

export default Products;
