import React from "react";
import { brands, product_type, categories } from "./fitlerType";

const Filters = ({
  filterToggle,
  handleFilter,
  handleFormSubmit,
  filter,
  handleChange,
  resetFilter,
}) => {
  return (
    <div className={`filter ${filterToggle ? "filter" : "filter"} `}>
      <button className="filter-btn" onClick={() => handleFilter()}>
        {" "}
        <i className="fas fa-filter"></i>Filters
      </button>
      <div className={`filter-item ${filterToggle ? " show " : "hide"}`}>
        <div className="reset-filter">
          <button className="btn" onClick={resetFilter}>
            All
          </button>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="w-30">
            <label>
              Brand:
              <select
                value={filter.brand}
                name="brand"
                onChange={handleChange}
                onBlur={handleChange}
              >
                {brands.map((brand, index) => {
                  return (
                    <option value={brand} key={index}>
                      {brand}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>
          <div className="w-30">
            <label className="left">
              Product Type:
              <select
                value={filter.productType}
                name="productType"
                onChange={handleChange}
                onBlur={handleChange}
              >
                {product_type.map((productTypeItem, index) => {
                  return (
                    <option value={productTypeItem} key={index}>
                      {productTypeItem}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>

          <div className="w-30">
            <label className="left">
              Category:
              <select
                value={filter.category}
                name="category"
                onChange={handleChange}
                onBlur={handleChange}
              >
                {categories.map((category, index) => {
                  return (
                    <option value={category} key={index}>
                      {category}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>

          <button className="btn">
            {" "}
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Filters;
