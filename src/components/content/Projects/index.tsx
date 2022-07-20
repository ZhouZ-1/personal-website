import { ForwardedRef, forwardRef } from "react";

const Projects = forwardRef(({}, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <section
      className="h-screen flex bg-blue-900 text-white scroll-mt-20"
      id="projects"
      ref={ref}
    >
      <div className="container p-8 mx-auto">
        <h2 className="text-6xl font-bold ">Projects</h2>
      </div>
    </section>
  );
});

export default Projects;
