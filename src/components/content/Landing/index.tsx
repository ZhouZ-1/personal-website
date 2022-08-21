import { ForwardedRef, forwardRef } from "react";
import Socials from "../../icons/Socials";
import Stars from "./Stars";

import ArrowDownIcon from "../../icons/svgs/arrow-down-icon.svg";

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
      <a href="#about" className="absolute bottom-10 animate-bounce">
        <ArrowDownIcon width={24} height={24} />
      </a>
    </main>
  );
};

export default forwardRef(Landing);
