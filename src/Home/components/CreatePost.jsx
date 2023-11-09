import React, { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export const CreatePost = ({ userInfo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="border p-3 mt-3 rounded-md flex bg-white ">
        <Link to={"/user"}>
          <img
            className="h-14 w-14 rounded-2xl mr-2"
            src={`public/${userInfo?.pfp ?? "default.png"}`}
            alt="profile"
          />
        </Link>
        <button
          className="border text-gray-400 hover:border-blue-600 rounded-md w-full text-left pl-2 hover:cursor-text"
          onClick={toggleModal}
        >
          Create post...
        </button>
      </div>
      <CreatePostModal isOpen={isOpen} toggleModal={toggleModal} />
    </>
  );
};

export const CreatePostModal = ({ isOpen, toggleModal }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center backdrop-brightness-50">
      <div className="bg-white p-4 rounded shadow-xl flex flex-col w-full lg:w-[60vw] mx-10 ">
        <div>
          <button onClick={toggleModal} className="self-end">
            <AiOutlineClose size={22} />
          </button>
          <img src={`public/${""}`} alt="" />
        </div>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Titulo"
          className="rounded-sm border border-gray-300 p-2 mt-2"
        />
        <textarea
          placeholder="Contenido del post"
          className="rounded-sm border border-gray-300 p-2 mt-2"
        />
      </div>
    </div>
  );
};
