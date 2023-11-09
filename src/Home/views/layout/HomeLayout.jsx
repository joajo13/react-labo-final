import { useState } from "react";
import { NavBar } from "../../components/NavBar";
import { RightPanel } from "../../components/RightPanel";
import SideBar from "../../components/SideBar";

export const HomeLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <NavBar toggleMenu={toggleMenu} />
      <div className="flex justify-between">
        <SideBar isOpen={isOpen} />

        <div className="mx-2 w-full flex justify-center z-20">{children}</div>

        <RightPanel />
      </div>
    </div>
  );
};
