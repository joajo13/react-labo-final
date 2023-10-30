import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import {
  mainMenus,
  usersMenu,
  comunidadesMenu,
  moreMenus,
} from "../Hooks/SideBar";

export default function SideBar() {
  const [open, setOpen] = useState(true);
  return (
    <div className="fixed  left-0 h-full flex">
      <div
        className={` ${
          open ? "w-42" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300 bg-opacity-90 bg-blur-2xl bg-gray-900`}
      >
        <FontAwesomeIcon
          icon={open ? faX : faBars}
          className={`absolute cursor-pointer  top-9 w-7 border-dark-purple
            border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />

        <ul className="pt-6 ">
          {mainMenus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <FontAwesomeIcon icon={Menu.icon} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.text}
              </span>
            </li>
          ))}
        </ul>
        <ul className="pt-6">
          {usersMenu.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <FontAwesomeIcon icon={Menu.icon} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.text}
              </span>
            </li>
          ))}
        </ul>
        <ul className="pt-6">
          {comunidadesMenu.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <FontAwesomeIcon icon={Menu.icon} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.text}
              </span>
            </li>
          ))}
        </ul>
        <ul className="pt-6">
          {moreMenus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <FontAwesomeIcon icon={Menu.icon} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
