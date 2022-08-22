import { useEffect, useState } from "react";
import MenuIcon from "../../icons/MenuIcon";
import { Transition } from "@headlessui/react";

interface Props {
  refs: React.RefObject<HTMLDivElement>[];
}

const Navbar = ({ refs }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    refs.forEach((ref) => {
      console.log(ref.current?.offsetHeight);
    });
  }, [refs]);

  return (
    <nav className="flex items-center justify-between flex-wrap p-6 fixed t-0 w-full z-10 bg-black/50 backdrop-blur font-semibold">
      <h1 className="text-white mr-6 text-2xl cursor-default md:ml-2">
        {"<Zhou />"}
      </h1>
      <MenuIcon
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
      />
      {/* Mobile menu */}
      <Transition
        as="ul"
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        className=" md:hidden w-full text-white text-lg"
      >
        <li className="mt-4 mr-4 hover:text-gray-200 text-right relative">
          <a
            href="#home"
            className="cursor-pointer px-1"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
        </li>
        <li className="mt-4 mr-4 hover:text-gray-200 text-right">
          <a
            href="#about"
            className="cursor-pointer px-1"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
        </li>
        <li className="mt-4 mr-4 hover:text-gray-200 text-right">
          <a
            href="#projects"
            className="cursor-pointer px-1"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
        </li>
        <li className="mt-4 mr-4 hover:text-gray-200 text-right">
          <a
            href="#contact"
            className="cursor-pointer px-1"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </li>
      </Transition>
      <ul className="flex-grow md:flex w-auto justify-end text-white text-lg hidden">
        <li className="cursor-pointer hover:text-gray-200 mr-4">
          <a href="#home">Home</a>
        </li>
        <li className="cursor-pointer hover:text-gray-200 mr-4">
          <a href="#about">About</a>
        </li>
        <li className="cursor-pointer hover:text-gray-200 mr-4">
          <a href="#projects">Projects</a>
        </li>
        <li className="cursor-pointer hover:text-gray-200 mr-4">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
