import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/index";
const URL = "http://makeup-api.herokuapp.com/api/v1/products.json";
const Homepage = () => {
  const [products, setProducts] = useState(null);
  const [brand, setBrand] = useState("");
  const [productType, setProductType] = useState("");
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
    console.log(filterToggle);
  };

  const handleChange = (e) => {
    setBrand(e.target.value);
    // console.log(brand);
  };
  const onTypeChange = (e) => {
    setProductType(e.target.value);
    // console.log(productType);
  };

  let brandData;
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (brand.length > 0 && productType.length === 0) {
      try {
        brandData = await axios.get(
          `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`
        );
        if (brandData.data) {
          setProducts(brandData.data);
        }
        // console.log(Array.isArray(brandData.data));
      } catch (error) {
        console.log(error);
      }
    }

    if (brand.length > 0 && productType.length > 0) {
      try {
        brandData = await axios.get(
          `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&product_type=${productType}`
        );
        if (brandData.data) {
          setProducts(brandData.data);
        }
        // console.log(Array.isArray(brandData.data));
      } catch (error) {
        console.log(error);
      }
    }
    setBrand("");
    setProductType("");
  };

  const resetFilter = () => {
    console.log(products);
    // setProductType(products);
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
            <label>Brand</label>
            <input type="text" value={brand} onChange={handleChange} />
            <label>Product Type</label>
            <input type="text" value={productType} onChange={onTypeChange} />
            <i class="fas fa-search"></i>
          </form>
          <div className="reset-filter">
            <button className="btn" onClick={resetFilter}>
              Reset
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
