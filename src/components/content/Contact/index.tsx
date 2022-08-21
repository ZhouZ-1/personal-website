import { ForwardedRef, forwardRef } from "react";
import { MailIcon } from "@heroicons/react/outline";
import LinkedIn from "../../icons/svgs/linkedin.svg";

const Contact = ({}, ref: ForwardedRef<HTMLDivElement>) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = document.getElementById("name") as HTMLInputElement;
    const email = document.getElementById("email") as HTMLInputElement;
    const message = document.getElementById("message") as HTMLTextAreaElement;

    const webhookUrl =
      "https://discord.com/api/webhooks/1010889989967597619/RUIlodA9hfst0FuAL1ebQadm5vmv8Unn6QPqC7MLu234TLaRhiToI6R9inllJH8lL4b0";

    // Submit the form data to the webhook
    (async () => {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: `Name: ${name.value}\nEmail:${email.value}\nMessage:${message.value}`,
        }),
      });

      if (response.ok) {
        alert("Thanks for reaching out! I'll get back to you soon.");
      } else {
        alert("There was an error! Try again later!");
      }
    })();

    console.log("submitted");
  };

  return (
    <section className="bg-white" id="contact" ref={ref}>
      <div className="mx-auto">
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          <div className=" py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12 ml-auto">
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Get in touch
              </h2>
              <p className="mt-3 text-lg leading-6 text-gray-500">
                I&apos;m always open to new opportunities. Want to have a quick
                chat or grab a coffee? Feel free to connect with me on LinkedIn,
                send me an email or contact me via the form. I&apos;ll get back
                to you as soon as possible.
              </p>
              <dl className="mt-8 text-base text-gray-500">
                <div className="mt-3">
                  <dt className="sr-only">LinkedIn</dt>
                  <dd className="flex">
                    <LinkedIn fill="rgb(156, 163, 175)" />
                    <a
                      className="ml-3"
                      href="https://www.linkedin.com/in/zhouz1/"
                    >
                      zhouz1
                    </a>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <MailIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <a className="ml-3" href="mailto:hello@zzhou.dev">
                      hello@zzhou.dev
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="py-12 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <form onSubmit={onSubmit} className="grid grid-cols-1 gap-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                    placeholder="Message"
                    defaultValue={""}
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default forwardRef(Contact);
