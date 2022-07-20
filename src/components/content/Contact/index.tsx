import { ForwardedRef, forwardRef } from "react";

const Contact = forwardRef(({}, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <section
      className="h-screen flex bg-sky-900 text-white scroll-mt-20"
      id="contact"
      ref={ref}
    >
      <div className="container p-8 mx-auto">
        <h2 className="text-6xl font-bold">Contact</h2>
      </div>
    </section>
  );
});

export default Contact;
