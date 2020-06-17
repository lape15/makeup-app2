import React, { useEffect, useState } from "react";
import axios from "axios";
import Products from "./Products";
import Filters from "./Filters";
import Loading from "../Loader/index";

const URL = "http://makeup-api.herokuapp.com/api/v1/products.json";
const Homepage = () => {
  const [products, setProducts] = useState(null);
  const [filter, setFilter] = useState({
    brand: "colourpop",
    productType: "",
  });

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
  };

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
        }
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
      <Filters
        filterToggle={filterToggle}
        handleFilter={handleFilter}
        handleFormSubmit={handleFormSubmit}
        filter={filter}
        handleChange={handleChange}
        resetFilter={resetFilter}
      />
      {!products ? (
        <Loading />
      ) : products.length === 0 ? (
        <p>Item not available</p>
      ) : (
        <Products list={makeUp} />
      )}
    </div>
  );
};

export default Homepage;
