import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiCake } from "react-icons/bi";

export const UserCard = () => {
  return (
    <div className="flex justify-center ">
      <div className="mt-3 w-[45vw]">
        <div className="grid grid-cols-2 border rounded-lg bg-white p-6">
          <div className="flex flex-col justify-between h-full">
            <div className="">
              <h1 className="text-2xl font-semibold">UserName</h1>
              <h2 className="text-xl mt-3">Name and lastname</h2>
              <h2 className="text-lg mt-3 text-gray-800 ">Cake day</h2>
              <p className="text-gray-500 flex items-center">
                <BiCake className="text-blue-600 mr-1" />
                {"15/02/2003"}
              </p>
            </div>
            <div className="w-10/12">
              <button className="border border-orange-500 rounded-3xl py-1 px-2 flex items-center mr-6 w-full hover:border-orange-700 hover:border-2">
                <AiOutlinePlus className="mr-1" />
                Add social link
              </button>
              <button className="mt-3 bg-orange-500 rounded-3xl hover:bg-orange-700 p-2 mr-6 font-semibold w-full">
                Editar
              </button>
            </div>
          </div>
          <div>
            <img
              className="h-[300px] w-[300px] rounded-2xl"
              src="https://i.imgur.com/9LcmFac.jpeg"
              alt="Profile pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
