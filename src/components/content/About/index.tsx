import { ForwardedRef, forwardRef } from "react";

const About = ({}, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <section
      className="flex text-white scroll-mt-20 bg-gradient-to-b from-black to-gray-900"
      id="about"
      ref={ref}
    >
      <div className="container px-4 sm:px-6 lg:px-8 py-12 mx-auto max-w-7xl ">
        <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight">
          &lt;About /&gt;
        </h2>
        <p className="mt-3 text-lg leading-6 text-slate-100 font-light">
          Hey there! I&apos;m Zhou, a tech-savvy software engineer driven by my
          love for exploring cutting-edge technologies. Fresh out of the
          University of New South Wales with a BSc in Computer Science, I&apos;m
          now taking my education to the next level with a standalone honours
          degree program.
        </p>
        <p className="mt-3 text-lg leading-6 text-slate-100 font-light">
          Building products that make a difference in people&apos;s lives is my
          ultimate goal. I&apos;m always on the hunt for new challenges and
          opportunities to learn and grow. With so many amazing projects I want
          to tackle, I&apos;d love to collaborate with others to bring our
          shared visions to life. If you&apos;re looking for a partner to turn
          your ideas into realities, let&apos;s connect and create something
          truly awesome!
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
