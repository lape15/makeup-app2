import React from "react";
import Card from "../Card"

const Products = (props) => {
  const { list } = props;

  return (
    <div className="card">
      {list.map((cardItem) => {
        return (<Card cardItem={cardItem} />);
      })}
    </div>
  );
};

export default Products;
