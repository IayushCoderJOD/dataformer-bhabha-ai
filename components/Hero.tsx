'use client'
import { useCallback } from "react";
import { SVGProps } from 'react';
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import Navbar from "./Navbar";

interface DatabaseIconProps extends SVGProps<SVGSVGElement> {}

function DatabaseIcon(props: DatabaseIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}


function Hero() {
const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
}, []);

return (
    <div className="relative z-10 mx-auto w-full h-screen overflow-hidden hero-background">
        <Navbar/>
                <div className="relative z-10 flex flex-col items-center justify-start mt-16 mb-16 text-center text-gray-200 tracking-tight">
        {/* <h1 className="text-[4rem] font-spline font-medium">
        Unleash the power of <br/> intuitive finance
        </h1> */}
        <div className=" w-1/2  py-4">
    <div className="text-center ">
        <h1 className="text-white text-3xl font-bold"> The all-in-one platform <br /> for dataset creation, curation, and cleaning, designed for training large language
              models in AI.</h1>
        <div className="mx-auto mt-2 h-1 w-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"></div>
    </div>
</div>


{/* .......................... */}
<div className="mt-8 container grid max-w-sm items-start gap-8 px-4 mx-auto sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="flex flex-col items-center justify-center space-y-2">
            <DatabaseIcon className="h-10 w-10 text-white" />
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-bold text-white">Dataset Creation</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Easily generate diverse and high-quality datasets for training AI models.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <DatabaseIcon className="h-10  text-white w-10" />
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-bold text-white ">Dataset Curation</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Collaborate with teams to annotate, verify, and refine datasets for specific tasks.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <DatabaseIcon className="h-10 w-10 text-white" />
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-bold text-white">Dataset Cleaning</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Leverage automated tools to preprocess and clean noisy data for improved model performance.
              </p>
            </div>
          </div>
        </div>

       
       
        
    </div>  
    <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="absolute inset-0 z-0"
        options={{
        fullScreen: { enable: false, zIndex: 0 },
        fpsLimit: 120,
        particles: {
            color: {
            value: "#d1d1d8",
            },
            move: {
            enable: true,
            direction: "top",
            outModes: {
                default: "out",
            },
            speed: 1,
            },
            number: {
            value: 100,
            },
            opacity: {
            value: 0.5,
            random: true,
            },
            size: {
            value: 1,
            random: true,
            },
        },
        interactivity: {
                // events: {
                //   onHover: {
                //     enable: true,
                //     mode: "repulse",
                //   },
                // },
                // modes: {
                //   repulse: {
                //     distance: 100,
                //     duration: 0.4,
                //   },
                // },
        },
        }}
    />
    </div>
);
}

export default Hero;