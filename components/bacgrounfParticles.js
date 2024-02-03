import React, { useCallback } from "react";

import { loadFull } from "tsparticles";
import Particles from "react-particles";
import ParticlesConfig from "@/config/particles-config";
import { Container } from "postcss";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (Container) => {
    await console.log(Container);
  }, []);

  return (
    <div id="particle-background">
      <Particles 
        id="tsparticles" 
        particlesLoaded="particlesLoaded"
        init={particlesInit}
        loaded={particlesLoaded}
        options={ParticlesConfig}
        height="100vh"
        width="100vm" 
      ></Particles>
    </div>
  );
};

export default ParticlesBackground;