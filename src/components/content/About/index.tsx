import { ForwardedRef, forwardRef } from "react";

const About = ({}, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <section
      className="h-screen flex bg-gray-900 text-white scroll-mt-20"
      id="about"
      ref={ref}
    >
      <div className="container p-8 mx-auto">
        <h2 className="text-6xl font-bold">About</h2>
        <p className="text-white text-2xl md:text-3xl">
          I'm a full-stack developer with a passion for building beautiful
          applications.
        </p>
        <p className="text-white text-2xl md:text-3xl">
          I'm a self-taught developer with a passion for learning new
          technologies.
        </p>
      </div>
    </section>
  );
};

export default forwardRef(About);
