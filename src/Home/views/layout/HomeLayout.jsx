import { useState } from "react";
import { NavBar } from "../../components/NavBar";
import { RightPanel } from "../../components/RightPanel";
import SideBar from "../../components/SideBar";

export const HomeLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <NavBar toggleMenu={toggleMenu} />
      <div className="flex justify-between h-screen overflow-auto">
        <SideBar isOpen={isOpen} />
        <div className="mx-2">{children}</div>
        <RightPanel />
      </div>
    </div>
  );
};
