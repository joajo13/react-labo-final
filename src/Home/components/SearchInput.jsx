import React from "react";

export const SearchInput = () => {
  return (
    <div className="relative text-gray-600">
      <input
        className="border-2 border-gray-300 rounded-full p-1 mx-6 w-96"
        type="search"
        name="search"
        placeholder="Search"
      />
      <button
        type="submit"
        className="absolute right-0 top-0 mt-3 mr-4"
      ></button>
    </div>
  );
};
