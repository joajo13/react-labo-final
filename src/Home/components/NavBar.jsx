import { FcReddit } from "react-icons/fc";
import { SearchInput } from "./SearchInput";

export const NavBar = () => {
  return (
    <nav>
      <div className="flex items-center py-2 justify-between">
        <a href="" className="flex items-center">
          <FcReddit className="h-8 w-8 mr-2" size={32} />
          <span className="text-xl font-bold">Reddit</span>
        </a>
        <SearchInput />
        <div className="flex items-center">
          <a href="" className="mr-6">
            Loginnnnnn alfredo dsfdgdgdfgdfgdfg
          </a>
        </div>
      </div>
    </nav>
  );
};
