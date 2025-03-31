import React from "react";

const Filter = ({ filterName, setFilterName }) => {
  return (
    <div>
      filter shown with{" "}
      <input
        type="text"
        value={filterName}
        onChange={(e) => setFilterName(e.target.value)}
      />
    </div>
  );
};

export default Filter;
