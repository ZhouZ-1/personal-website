import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>Zhuoling Zhou</title>
        <meta name="description" content="Zhou's personal website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Center text */}
      <div className="w-screen min-h-screen flex flex-col justify-center items-center p-4 overflow-y-scroll">
        <div className="text-[3rem] lg:text-[4rem] md:text-[4rem] font-extrabold text-gray-800">
          Hello world 👋
        </div>
      </div>
    </>
  );
};

export default Home;
