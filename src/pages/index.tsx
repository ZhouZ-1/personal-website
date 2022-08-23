import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Landing from "../components/content/Landing";
import About from "../components/content/About";
import Projects from "../components/content/Projects";
import Contact from "../components/content/Contact";
import { useRef } from "react";

const Home: NextPage = () => {
  const landingRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Head>
        <title>Zhuoling Zhou | Software Engineer</title>
        <meta
          name="description"
          content="Software engineer based in Sydney, Australia. Current computer science student at UNSW. "
        />
        <meta property="og:image" content="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Navbar refs={[landingRef, aboutRef, projectsRef, contactRef]} />
      <Landing ref={landingRef} />
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
      <Footer />
    </>
  );
};

export default Home;
