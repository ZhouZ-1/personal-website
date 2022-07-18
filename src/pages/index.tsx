import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import AnimatedFavicon from "../components/icons/AnimatedFavicon";
import CustomParticles from "../components/CustomParticles";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zhuoling Zhou | Software Engineer</title>
        <meta name="description" content="Zhou's personal website." />
        <meta property="og:image" content="https://zzhou.dev/pikasparkle.gif" />
        <meta property="og:image:type" content="image/gif" />
      </Head>
      <AnimatedFavicon />
      <Navbar />
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="text-5xl md:text-7xl font-extrabold text-white">
          Hello world 👋
        </div>
      </div>
      <Footer />
      <CustomParticles />
    </>
  );
};

export default Home;
