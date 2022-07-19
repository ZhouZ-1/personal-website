import Stars from "./Stars";

const Landing = () => {
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <Stars />
      <h2 className="text-5xl md:text-7xl font-extrabold text-white">
        Hello world 👋
      </h2>
    </main>
  );
};

export default Landing;
