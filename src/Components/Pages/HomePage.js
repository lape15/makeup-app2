import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/index";
const URL = "http://makeup-api.herokuapp.com/api/v1/products.json";
const Homepage = () => {
  const [products, setProducts] = useState(null);
  const [filter, setFilter] = useState({
    brand: "",
    productType: "",
  });
  // const [productType, setProductType] = useState("");
  const [filterToggle, setFilterToggle] = useState(false);
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

  const handleFilter = () => {
    setFilterToggle(!filterToggle);
  };

  const handleChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
    // console.log(brand);
  };
  // const onTypeChange = (e) => {
  //   setProductType(e.target.value);
  //   // console.log(productType);
  // };

  let brandData;
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (filter.brand.length > 0 && filter.productType.length === 0) {
      try {
        brandData = await axios.get(
          `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${filter.brand}`
        );
        if (brandData.data) {
          setProducts(brandData.data);
          // console.log(products);
        }
        // console.log(Array.isArray(brandData.data));
      } catch (error) {
        console.log(error);
      }
    }

    if (filter.brand.length > 0 && filter.productType.length > 0) {
      try {
        brandData = await axios.get(
          `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${filter.brand}&product_type=${filter.productType}`
        );
        if (brandData.data) {
          setProducts(brandData.data);
        }
        // console.log(Array.isArray(brandData.data));
      } catch (error) {
        console.log(error);
      }
    }
    setFilter({
      brand: "",
      productType: "",
    });
  };

  const resetFilter = async () => {
    try {
      const reset = await axios.get(URL);
      if (reset.data) setProducts(reset.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="home">
      <div className={`filter ${filterToggle ? "filter extra" : "filter"} `}>
        <div className="filter-btn" onClick={handleFilter}>
          {" "}
          <i className="fas fa-filter"></i>Filters
        </div>
        <div className={`hide ${filterToggle ? " filter-item" : "hide"}`}>
          <form onSubmit={handleFormSubmit}>
            <label>Brand:</label>
            <input
              type="text"
              value={filter.brand}
              onChange={handleChange}
              name="brand"
            />
            <label>Product Type:</label>
            <input
              type="text"
              value={filter.productType}
              onChange={handleChange}
              name="productType"
            />
            <button className="btn">
              <i class="fas fa-search"></i>
            </button>
          </form>
          <div className="reset-filter">
            <button className="btn" onClick={resetFilter}>
              All
            </button>
          </div>
        </div>
      </div>
      {!products ? (
        <p>Loading for shit </p>
      ) : products.length === 0 ? (
        <p>Item not available</p>
      ) : (
        <Card list={makeUp} />
      )}
    </div>
  );
};

export default Homepage;
