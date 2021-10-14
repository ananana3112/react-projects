import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((catergory, index) => {
        return (
          <button
            key={index}
            className="filter-btn"
            onClick={() => filterItems(catergory)}
          >
            {catergory}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
