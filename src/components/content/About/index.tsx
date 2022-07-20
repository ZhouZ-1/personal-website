import { ForwardedRef, forwardRef } from "react";

const About = forwardRef(({}, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <section
      className="h-screen flex bg-gray-900 text-white scroll-mt-20"
      id="about"
      ref={ref}
    >
      <div className="container p-8 mx-auto">
        <h2 className="text-6xl font-bold">About</h2>
      </div>
    </section>
  );
});
export default About;
