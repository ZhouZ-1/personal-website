import { ForwardedRef, forwardRef } from "react";
import Socials from "../../icons/Socials";
import Stars from "./Stars";

import ArrowDownIcon from "../../icons/svgs/arrow-down-icon.svg";
import BouncingDownArrow from "../../icons/BouncingDownArrow";

const Landing = ({}, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <main
      className="h-screen flex flex-col justify-center items-center text-white"
      id="home"
      ref={ref}
    >
      <Stars />
      <h2 className="text-5xl md:text-7xl bold ">
        Zhuoling <span className="font-bold">Zhou</span>
      </h2>
      <p className="text-white text-md md:text-xl mt-2">
        Penultimate student @ UNSW | Software Engineer
      </p>
      <Socials />
      <BouncingDownArrow href="#about" />
    </main>
  );
};

export default forwardRef(Landing);
