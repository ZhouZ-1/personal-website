import { ForwardedRef, forwardRef } from "react";

const Projects = ({}, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <section
      className="flex bg-blue-900 text-white scroll-mt-20 bg-gradient-to-b from-gray-900 to-gray-800"
      id="projects"
      ref={ref}
    >
      <div className="container px-4 sm:px-6 lg:px-8 py-12 mx-auto max-w-7xl font-light">
        <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight">
          &lt;Projects /&gt;
        </h2>
        <div className="flex flex-row flex-wrap">
          <div className="md:w-1/2 mt-4 pr-5">
            <h3 className="font-bold text-xl">Linkup Events Tracker v2</h3>
            <p className="text-slate-200 text-lg">
              A dedicated event tracker for events at UNSW. Browse upcoming
              events from 150+ societies, all in one place. Built with
              TypeScript, React, Python, Flask, PostgreSQL and hosted on AWS.
            </p>
            <a
              href="https://linkupevents.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dashed decoration-1 cursor-pointer mr-2 hover:text-white text-slate-400"
            >
              Website
            </a>
          </div>

          <div className="md:w-1/2 mt-4 pr-5">
            <h3 className="font-bold text-xl">Arc Clubs Search Interface</h3>
            <p className="text-slate-200 text-lg">
              Collaborated with Arc to create a user interface for exploring
              over 300+ clubs, societies and community programs at UNSW. Built
              with JavaScript, HTML/CSS, React and utilised Algolia to implement
              search.
            </p>
            <a
              href="https://www.arc.unsw.edu.au/get-involved"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dashed decoration-1 cursor-pointer mr-2 hover:text-white text-slate-400"
            >
              Website
            </a>
          </div>

          <div className="md:w-1/2 mt-4 pr-5">
            <h3 className="font-bold text-xl">
              CSESoc Projects Subcommittee - Slackbot
            </h3>
            <p className="text-slate-200 text-lg">
              Worked in a team of four to create and develop several features
              for a community slackbot using Python and MySQL.
            </p>
            <a
              href="https://github.com/csesoc/community-slackbot"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dashed decoration-1 cursor-pointer mr-2 hover:text-white text-slate-400"
            >
              Source
            </a>
          </div>

          <div className="md:w-1/2 mt-4 pr-5">
            <h3 className="font-bold text-xl">Linkup Events Tracker Classic</h3>
            <p className="text-slate-200 text-lg">
              The original Linkup website which was built at the end of 2019
              when the team were still in our first year.
            </p>
            <a
              href="https://old.linkupevents.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dashed decoration-1 cursor-pointer mr-2 hover:text-white text-slate-400"
            >
              Website
            </a>
          </div>

          <div className="md:w-1/2 mt-4 pr-5">
            <h3 className="font-bold text-2xl">facebook-events-scraper</h3>
            <p className="text-slate-200 text-lg">
              A simple Python package for scraping events from facebook using
              Selenium. This module can be used to extract event details from a
              given facebook event link or retrieve a list of events from a
              facebook page url.
            </p>
            <a
              href="https://pypi.org/project/facebook-events-scraper/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dashed decoration-1 cursor-pointer mr-2 hover:text-white text-slate-400"
            >
              Website
            </a>
          </div>

          <div className="md:w-1/2 mt-4 pr-5">
            <h3 className="font-bold text-xl">
              Stock Portfolio Management System
            </h3>
            <p className="text-slate-200 text-lg">
              A stock portfolio management system aimed to enable newer
              investors to organise and track their stocks so that they are
              better informed, with the abilty to share your portfolio with
              other people and generate tax reports.
            </p>
            <a
              href="https://github.com/ZhouZ-1/21T3-COMP3900"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dashed decoration-1 cursor-pointer mr-2 hover:text-white text-slate-400"
            >
              Source
            </a>
          </div>

          <div className="md:w-1/2 mt-4 pr-5">
            <h3 className="font-bold text-xl">Notion Stopwatch</h3>
            <p className="text-slate-200 text-lg">
              A modified Notion stopwatch widget that more closely matches the
              behaviour of the google search stopwatch feature. Includes
              background and text colour customisation.
            </p>
            <a
              href="https://stopwatch.zzhou.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dashed decoration-1 cursor-pointer mr-2 hover:text-white text-slate-400"
            >
              Website
            </a>
            <a
              href="https://github.com/ZhouZ-1/stopwatch"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dashed decoration-1 cursor-pointer mr-2 hover:text-white text-slate-400"
            >
              Source
            </a>
          </div>

          <div className="md:w-1/2 mt-4 pr-5">
            <h3 className="font-bold text-xl">
              Loop Mania - Java based RPG game
            </h3>
            <p className="text-slate-200 text-lg">
              Created a game with gameplay similar to{" "}
              <a
                href="https://fourquarters.itch.io/loopathero-demo"
                className="cursor-pointer underline decoration-dashed decoration-1"
              >
                Loop Hero
              </a>
              , developed in Java for the Object-Oriented Design &amp;
              Programming course. A major project over 7 weeks within a team of
              five which achieved a final mark of 99.6/100
            </p>
            <p className="text-base text-slate-400 italic">
              Source code avaliable on request
            </p>
          </div>

          <div className="md:w-1/2 mt-4 md:pr-5">
            <h3 className="font-bold text-xl">Personal Website (WIP)</h3>
            <p className="text-slate-200 text-lg">
              A personal webite to showcase projects and practice frontend
              development. Created using TypeScript, TailwindCSS, Next.js, with
              plans to integrate next-auth, Prisma, PostgreSQL and tRPC into the
              website.
            </p>
            <a
              href="https://zzhou.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dashed decoration-1 cursor-pointer mr-2 hover:text-white text-slate-400"
            >
              Website
            </a>
            <a
              href="https://github.com/ZhouZ-1/personal-website"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dashed decoration-1 cursor-pointer mr-2 hover:text-white text-slate-400"
            >
              Source
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default forwardRef(Projects);
