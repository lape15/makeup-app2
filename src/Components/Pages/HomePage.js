import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/index";
const URL = "http://makeup-api.herokuapp.com/api/v1/products.json";
const Homepage = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => setProducts(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, [setProducts]);
  // console.log(products);
  return (
    <div className="home">
      {!products ? <p>Loading for shit </p> : <Card list={products} />}
    </div>
  );
};

export default Homepage;
