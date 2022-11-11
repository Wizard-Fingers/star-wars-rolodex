import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="p-4 flex justify-center">
      <input
        className="pa3 ba b--green bg-lightest-blue rounded-full shadow-5 w-[24rem] h-[4.5rem] outline-none"
        type="search"
        placeholder="Search Friends"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
