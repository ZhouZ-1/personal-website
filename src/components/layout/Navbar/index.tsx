import { useRef } from "react";
import MenuIcon from "../../icons/MenuIcon";

const Navbar = () => {
  const navRef = useRef<HTMLUListElement>(null);
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black/50 p-6 fixed t-0 w-full">
      <h1 className="text-white mr-6 text-2xl cursor-default md:ml-2">
        {"<Zhou />"}
      </h1>
      <MenuIcon
        onClick={() => {
          navRef.current?.classList.toggle("max-h-0");
          navRef.current?.classList.toggle("max-h-[25vh]");
        }}
      />
      <ul
        className="w-full flex-grow md:flex md:w-auto justify-end block transition-all ease-linear duration-300 overflow-hidden py-1 max-h-0 md:max-h-fit text-white text-lg"
        ref={navRef}
      >
        <li className="block mt-4 md:inline-block md:mt-0 mr-4  hover:text-gray-200 text-right">
          <a href="#home" className="cursor-pointer px-1">
            Home
          </a>
        </li>
        <li className="block mt-4 md:inline-block md:mt-0 mr-4 hover:text-gray-200 text-right">
          <a href="#about" className="cursor-pointer px-1">
            About
          </a>
        </li>
        <li className="block mt-4 md:inline-block md:mt-0 mr-4 hover:text-gray-200 text-right">
          <a href="#projects" className="cursor-pointer px-1">
            Projects
          </a>
        </li>
        <li className="block mt-4 md:inline-block md:mt-0 mr-4 hover:text-gray-200 text-right">
          <a href="#contact" className="cursor-pointer px-1">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
