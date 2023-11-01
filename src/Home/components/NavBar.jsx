import { FcReddit } from "react-icons/fc";
import { SearchInput } from "./SearchInput";

export const NavBar = () => {
  return (
    <nav>
      <div className="flex items-center py-2 justify-between border">
        <a href="" className="flex items-center">
          <FcReddit className="h-8 w-8 ml-2 mr-2" size={32} />
          <span className="text-xl font-bold">Reddit</span>
        </a>
        <SearchInput />
        <div className="flex items-center">
          <a
            href=""
            className="mr-6 font-bold bg-orange-500 py-1 px-2 rounded-full border border-orange-500 hover:bg-orange-600 hover:border-orange-600 text-white"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};
