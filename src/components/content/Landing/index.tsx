import { ForwardedRef, forwardRef } from "react";
import Stars from "./Stars";

const Landing = ({}, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <main
      className="h-screen flex flex-col justify-center items-center"
      id="home"
      ref={ref}
    >
      <Stars />
      <h2 className="text-5xl md:text-7xl font-extrabold text-white">
        Hello world 👋
      </h2>
    </main>
  );
};

export default forwardRef(Landing);
