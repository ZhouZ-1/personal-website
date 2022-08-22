import { ForwardedRef, forwardRef } from "react";

const About = ({}, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <section
      className="flex bg-gray-900 text-white scroll-mt-20"
      id="about"
      ref={ref}
    >
      <div className="container px-4 sm:px-6 lg:px-8 py-12 mx-auto max-w-7xl">
        <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight">
          &lt;About /&gt;
        </h2>
        <p className="mt-3 text-lg leading-6 text-slate-100 font-light">
          Hi, I&apos;m Zhou. I'm a software engineer with a passion for learning
          new technologies. I graduated with a Bachelor of Science (Computer
          Science) from the University of New South Wales in 2022, and I'm
          currently pursuing further study in a standalone honours degree
          program.
        </p>
        <p className="mt-3 text-lg leading-6 text-slate-100 font-light">
          I enjoy building things that people use, and I'm always looking for
          new opportunities to learn and grow. There are so many things I'd like
          to build but not enought time to do so by myself. Want to work
          together to build something awesome? Send me a message and lets chat!
        </p>
        <p className="mt-3 text-lg leading-6 text-slate-100 font-light">
          <span className="font-bold">Interests:</span> Front-end developement,
          competitive programming.
        </p>
        <p className="mt-3 text-lg leading-6 text-slate-100 font-light">
          <span className="font-bold">Currently learning:</span> Rust, C++
        </p>
      </div>
    </section>
  );
};

export default forwardRef(About);
