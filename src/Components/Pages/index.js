import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Products from "./Products";
import Filters from "./Filters";
import Loading from "../Loader/index";
import NotAvailable from "./notFound";
import Pagination from "./Pagination";

const URL = "http://makeup-api.herokuapp.com/api/v1/products.json";
const Homepage = () => {
  const [products, setProducts] = useState(null);
  const [filter, setFilter] = useState({
    brand: "",
    productType: "",
    category: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(20);
  let productData = [];
  const [filterToggle, setFilterToggle] = useState(false);
  const storedProduct = useRef();
  const fetchApi = (url) => {
    axios
      .get(url)
      .then((response) => {
        localStorage.setItem("products", JSON.stringify(response.data));

        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (products === null) {
      let makeUp = setProducts(JSON.parse(localStorage.getItem("products")));

      if (makeUp === null || makeUp === undefined) {
        fetchApi(URL);
      }
      storedProduct.current = makeUp;
    }
  }, [products]);

  const handleFilter = () => {
    setFilterToggle(!filterToggle);
    console.log(filterToggle);
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

    if (
      filter.brand.length === 0 &&
      filter.productType.length > 0 &&
      filter.category.length > 0
    ) {
      try {
        brandData = await axios.get(
          `http://makeup-api.herokuapp.com/api/v1/products.json?product_category=${filter.category}&product_type=${filter.productType}`
        );

        if (brandData.data) {
          setProducts(brandData.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const indexOfLastCard = currentPage * cardsPerPage;

  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  if (products) {
    productData = products;
  }
  const handlePagination = (pageNumber) => setCurrentPage(pageNumber);
  const resetFilter = () => {
    setProducts(JSON.parse(localStorage.getItem("products")));
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
        <NotAvailable />
      ) : (
        <>
          <Products
            list={productData}
            lastCard={indexOfLastCard}
            firstCard={indexOfFirstCard}
          />

          <Pagination
            cardsPerPage={cardsPerPage}
            totalCards={productData.length}
            paginate={handlePagination}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
};

export default Homepage;
