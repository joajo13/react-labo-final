import { FcReddit } from "react-icons/fc";
import { SearchInput } from "./SearchInput";
import { AiOutlineMenu } from "react-icons/ai";

export const NavBar = ({ toggleMenu }) => {
  return (
    <nav className="bg-white">
      <div className="sticky top-0 z-10 flex items-center py-2 justify-between h-navbar w-screen">
        <a href="" className="flex items-center ml-4">
          <FcReddit className="mr-2" size={32} />
          <img
            className="hidden lg:block object-contain h-6"
            src="/Reddit_logo.svg.png"
            alt="reddit text"
          />
        </a>
        <div>
          <SearchInput />
        </div>
        <div className="flex items-center">
          <a href="" className="mr-6 hidden lg:block">
            login
          </a>
          <button className="block lg:hidden mr-2" onClick={toggleMenu}>
            <AiOutlineMenu />
          </button>
        </div>
      </div>
    </nav>
  );
};
