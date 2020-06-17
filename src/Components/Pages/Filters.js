import React from "react";

const Filters = ({filterToggle, handleFilter, handleFormSubmit, filter, handleChange, resetFilter }) => {
  return (
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
  );
};

export default Filters;
