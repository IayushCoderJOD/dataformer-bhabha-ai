'use client'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.

function Hero() {
const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine,);
}, []);

const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
}, []);

return (
    <div className="relative z-10 mx-auto w-full overflow-hidden mt-4">
    {/* */}
    <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="absolute inset-0 z-0"
        options={{
            fullScreen: { enable: false, zIndex: 0 },
            background: {
                color: {
                    value: "#000",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 3,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 40,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }}
    />
<div className="py-56 text-center text-gray-200 tracking-tight relative z-10">
<h1 className="text-[4rem] font-spline font-medium">
Creating AI that benefits <br/> all of humanity
</h1>
{/* <button className="text-3xl mt-5 text-gray-200 relative z-10">Explore</button> */}
</div>
</div>
);
}

export default Hero