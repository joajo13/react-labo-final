import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  mainMenus,
  usersMenu,
  comunidadesMenu,
  moreMenus,
} from "../Hooks/SideBar";

export default function SideBar({ isOpen }) {
  const hiddenClass = isOpen ? "hidden" : "";

  return (
    <div
      className={`${hiddenClass} absolute left-0 w-1/2 lg:block max-h-sidebar h-sidebar lg:w-min border-r bg-white`}
    >
      <div className="w-sidebar p-5 relative duration-300 bg-opacity-90 bg-blur-2xl">
        <ul>
          {mainMenus.map((Menu, index) => (
            <li
              key={index}
              className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 bg-light-white"
            >
              <FontAwesomeIcon icon={Menu.icon} />
              <span className="origin-left duration-200">{Menu.text}</span>
            </li>
          ))}
        </ul>
        <ul className="pt-2">
          {usersMenu.map((Menu, index) => (
            <li
              key={index}
              className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 mt-2 bg-light-white"
            >
              <FontAwesomeIcon icon={Menu.icon} />
              <span className="origin-left duration-200">{Menu.text}</span>
            </li>
          ))}
        </ul>
        <ul className="pt-2">
          {comunidadesMenu.map((Menu, index) => (
            <li
              key={index}
              className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 mt-2 bg-light-white"
            >
              <FontAwesomeIcon icon={Menu.icon} />
              <span className="origin-left duration-200">{Menu.text}</span>
            </li>
          ))}
        </ul>
        <ul className="pt-2">
          {moreMenus.map((Menu, index) => (
            <li
              key={index}
              className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 mt-2 bg-light-white"
            >
              <FontAwesomeIcon icon={Menu.icon} />
              <span className="origin-left duration-200">{Menu.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
