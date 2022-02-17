import React from "react";

const SearchBox = ({ searchRobot }) => {
  return (
    <div>
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robot"
        name="search"
        onChange={searchRobot}
      />
    </div>
  );
};

export default SearchBox;
