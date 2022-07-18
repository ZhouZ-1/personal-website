import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import AnimatedFavicon from "../components/icons/AnimatedFavicon";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>Zhuoling Zhou</title>
        <meta name="description" content="Zhou's personal website." />
      </Head>
      <AnimatedFavicon />
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center bg-black">
        <div className="text-5xl md:text-7xl font-extrabold text-white">
          Hello world 👋
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
