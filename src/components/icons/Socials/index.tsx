import GitHub from "../svgs/github.svg";
import LinkedIn from "../svgs/linkedin.svg";
import ResumeIcon from "../svgs/resume.svg";
import { MailIcon } from "@heroicons/react/outline";

const Socials = () => {
  return (
    <section className="text-white flex md:text-xl mt-3 space-x-5">
      <a
        href="https://github.com/ZhouZ-1"
        className="hover:scale-110 transition-all ease-out flex justify-center items-center space-x-1"
      >
        <GitHub />
        <span>GitHub</span>
      </a>
      <a
        href="https://www.linkedin.com/in/zhouz1/"
        className="hover:scale-110 transition-all ease-out flex justify-center items-center space-x-1"
      >
        <LinkedIn />
        <span>LinkedIn</span>
      </a>
      <a
        href="https://zzhou.dev/resume_public.pdf"
        className="hover:scale-110 transition-all ease-out flex justify-center items-center space-x-1"
      >
        <ResumeIcon />
        <span>Resume</span>
      </a>
      <a
        href="mailto:hello@zzhou.dev"
        className="hover:scale-110 transition-all ease-out flex justify-center items-center space-x-1"
      >
        <MailIcon
          className="flex-shrink-0 h-6 w-6 text-white"
          aria-hidden="true"
        />
        <span>Email</span>
      </a>
    </section>
  );
};
export default Socials;
