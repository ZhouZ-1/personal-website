import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

const CustomParticles = () => {
  return (
    <Particles
      id="tsparticles"
      init={async (main: Engine) => await loadFull(main)}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 1,
        },
        style: {
          height: "100vh",
        },
        particles: {
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: 0.1,
            straight: false,
          },
          opacity: {
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
            value: { min: 0, max: 1 },
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
      }}
    />
  );
};

export default CustomParticles;
