import React from "react";
export const SearchInput = () => {
  return (
    <div className="relative text-gray-600">
      <input
        className="border-2 border-gray-300 rounded-full p-1 mx-6 w-96 px-3"
        type="search"
        name="search"
        placeholder="Search"
      ></input>
    </div>
  );
};
