import { FcReddit } from "react-icons/fc";
import { SearchInput } from "./SearchInput";
import { AiOutlineMenu, AiOutlinePlus } from "react-icons/ai";
import { RiNotification3Line } from "react-icons/ri";
import { BiMessageSquareDots } from "react-icons/bi";
import { IoMdOpen } from "react-icons/io";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const NavBar = ({ toggleMenu }) => {
  const { handleLogout } = useContext(AuthContext);

  return (
    <nav className="sticky top-0 bg-white z-40">
      <div className="z-10 flex items-center py-2 justify-between h-navbar">
        <Link to="/home" className="flex items-center ml-4">
          <FcReddit className="mr-2" size={32} />
          <img
            className="hidden lg:block object-contain h-6"
            src="/Reddit_logo.svg.png"
            alt="reddit text"
          />
        </Link>
        <div>
          <SearchInput />
        </div>
        <div className="hidden lg:flex items-center space-x-2 mr-2">
          <button
            className="rounded bg-orange-500 hover:bg-orange-700 p-2"
            onClick={handleLogout}
          >
            <IoMdOpen size={24} />
          </button>
          <button>
            <BiMessageSquareDots size={24} />
          </button>
          <button>
            <RiNotification3Line size={24} />
          </button>
          <button>
            <AiOutlinePlus size={24} />
          </button>
          <div>
            <Link to={"/user"}>
              <img
                className="h-8 w-8 rounded-full"
                src="https://i.imgur.com/9LcmFac.jpeg"
                alt="profile"
              />
            </Link>
            <span></span>
          </div>
        </div>
        <button className="block lg:hidden mr-4" onClick={toggleMenu}>
          <AiOutlineMenu />
        </button>
        <button
          className="rounded bg-orange-500 hover:bg-orange-700 p-2 lg:hidden block"
          onClick={handleLogout}
        >
          <IoMdOpen size={24} />
        </button>
      </div>
    </nav>
  );
};
