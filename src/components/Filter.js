import React from "react";
import { BiSearch } from "react-icons/bi";

const Filter = ({handleFilterChange, filterInput}) => {
  return (
    <div className="d-flex justify-content-start align-items-center w-75">
      <BiSearch
        size={28}
        className="mx-2 text-light bg-info p-1 rounded rounded-3"
      />
      <input
        type="text"
              placeholder="Search"
              value={filterInput}
              className="w-50 p-2 rounded rounded-3 border-0"
                onChange={(e) => handleFilterChange(e)}
      />
    </div>
  );
};

export default Filter;
