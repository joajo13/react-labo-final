import React from "react";
import { Link } from "react-router-dom";

export const CreatePost = () => {
  return (
    <div className="border p-3 mt-3 rounded-md flex bg-white ">
      <Link to={"/user"}>
        <img
          className="h-14 w-14 rounded-2xl mr-2"
          src="https://i.imgur.com/9LcmFac.jpeg"
          alt="profile"
        />
      </Link>
      <button className="border text-gray-400 hover:border-blue-600 rounded-md w-full text-left pl-2 hover:cursor-text">
        Create post...
      </button>
    </div>
  );
};
