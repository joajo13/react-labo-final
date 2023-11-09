import React, { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiCake } from "react-icons/bi";
import { AuthContext } from "../../context/AuthContext";

export const UserCard = () => {
  const { state } = useContext(AuthContext);
  const { userInfo } = state;
  const { name, lastName, userName, pfp, birthDate } = userInfo;

  const date = new Date(birthDate);

  // Get the day, month, and year
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // January is 0!
  const year = date.getFullYear();

  // Format the date
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <div className="flex justify-center ">
      <div className="mt-3 w-[45vw]">
        <div className="grid grid-cols-2 border rounded-lg bg-white p-6">
          <div className="flex flex-col justify-between h-full">
            <div className="">
              <h1 className="text-2xl font-semibold">{userName}</h1>
              <h2 className="text-xl mt-3">
                {name} {lastName}
              </h2>
              <h2 className="text-lg mt-3 text-gray-800 ">Cake day</h2>
              <p className="text-gray-500 flex items-center">
                <BiCake className="text-blue-600 mr-1" />
                {formattedDate}
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
              src={`public/${pfp ?? "default.png"}`}
              alt="Profile pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
