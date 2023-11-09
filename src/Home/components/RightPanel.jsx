import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { BiCake } from "react-icons/bi";
import { Link } from "react-router-dom";

export const RightPanel = () => {
  const { state } = useContext(AuthContext);
  const { userInfo } = state;

  return (
    <aside className="w-[15vw] h-sidebar absolute lg:fixed right-0 min-h-screen z-10">
      <div className="hidden lg:block mt-3 mr-3">
        <div className="border rounded-lg h-80 bg-white p-4 w-full flex flex-col justify-center">
          <div className="flex flex-col items-center">
            <Link to="/user">
              <img
                src={`/public/${userInfo?.pfp}`}
                alt="profilePic"
                className="rounded-xl h-20 w-20"
              />
            </Link>
            <h1 className="text-lg font-semibold mt-2">{userInfo?.userName}</h1>

            <span className="text-sm font-thing text-gray-600">
              u/{userInfo?.userName}
            </span>
          </div>
          <div className="bg-blue-200 rounded-lg p-2 mt-2">
            <h2 className="text-xl">
              {userInfo?.name} {userInfo?.lastName}
            </h2>
            <h2 className="text-lg ">Cake day:</h2>
            <p className=" flex items-center">
              <BiCake className="text-blue-600 mr-1" />
              {"15/02/2003"}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};
