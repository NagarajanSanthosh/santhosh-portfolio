import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";


const ParticlesComponent = (props) => {

  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };


  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#FFF",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: "#000", // Set particle color to black
        },
        links: {
          color: "#000", // Set link color to black
          distance: 200,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "random",
          enable: true,
          outModes: {
            default: "out", // Particles continue moving beyond the canvas boundaries
          },
          speed: 1, // Adjust the speed as needed
        },
        number: {
          value: 100, // Adjust the number of particles
        },
        opacity: {
          value: 1.0, // Adjust particle opacity
        },
        shape: {
          type: "circle", // You can also try other shapes like "triangle" or "star"
        },
        size: {
          value: { min: 1, max: 4 }, // Adjust particle size range
        },
      },
      detectRetina: true,
    }),
    [],
  );


  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;