import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/index";
const URL = "http://makeup-api.herokuapp.com/api/v1/products.json";
const Homepage = () => {
  const [products, setProducts] = useState(null);
  const [brand, setBrand] = useState("");
  const [productType, setProductType] = useState("");
  let makeUp;
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => setProducts(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, [setProducts]);

  if (products) {
    makeUp = products;
  }

  // const handleChange = e => {
  //   setForgotPassword({
  //     ...forgotPassword,
  //     [e.target.name]: e.target.value
  //   })
  // }

  const handleChange = (e) => {
    setBrand(e.target.value);
    // console.log(brand);
  };
  const onTypeChange = (e) => {
    setProductType(e.target.value);
    console.log(productType);
  };

  let brandData;
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      brandData = await axios.get(
        `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`
      );
      if (brandData.data) {
        console.log(brandData.data);
        // makeUp = brandData.data;
        setProducts(brandData.data);
        console.log(products);
      }
      console.log(Array.isArray(brandData.data));
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   if (brandData) setProducts(brandData.data);
  //   console.log(products);
  // }, [brandData, products]);
  return (
    <div className="home">
      <div className="filter">
        <div className="filter-btn">
          {" "}
          <i className="fas fa-filter"></i>Filters
        </div>
        <div className="filter-item">
          <form onSubmit={handleFormSubmit}>
            <label>Brand</label>
            <input type="text" value={brand} onChange={handleChange} />
            <label>Product Type</label>
            <input type="text" value={productType} onChange={onTypeChange} />
            <button>Filter</button>
          </form>
        </div>
      </div>
      {!products ? <p>Loading for shit </p> : <Card list={makeUp} />}
    </div>
  );
};

export default Homepage;
