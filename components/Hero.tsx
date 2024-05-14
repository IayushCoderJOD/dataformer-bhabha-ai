'use client'
    import { useCallback } from "react";
    import Particles from "react-tsparticles";
import { SVGProps } from 'react';
import hero from "@/public/images/heroimg.jpg"
    import type { Container, Engine } from "tsparticles-engine";
    import { loadFull } from "tsparticles";
import Image from "next/image";

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

// https://w0.peakpx.com/wallpaper/18/8/HD-wallpaper-black-blue-boxes-black.jpg
    function Hero() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        console.log(container);
    }, []);

    return (
        <>
        <div className="relative z-10 mx-auto  overflow-hidden h-screen w-full ">
                    {/* <div className="relative z-10 flex flex-col items-center justify-start mt-16 mb-16 text-center text-gray-200 tracking-tight">
            <h1 className="text-[4rem] font-spline font-medium">
            Unleash the power of <br/> intuitive finance
            </h1>
            <p className="max-w-[800px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Say goodbye to the outdated financial tools. Every small business owner, regardless of the background, can now manage their business like a pro. Simple. Intuitive. And never boring.
            </p>
            <div className="mt-8">
            <button className="px-6 py-3 text-lg font-medium text-white bg-black rounded-md hover:bg-gray-800">
            Join the waitlist
            </button>
            </div>
            <div className="mt-4">
            <a href="#learn-more" className="text-gray-400 hover:underline">
            Learn more  
            </a>
            </div>
        </div>   */}
        <section className= " z-50 absolute w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
      <div className="container space-y-12">
        <div className="flex flex-col mb-16 items-center justify-center space-y-4 text-center">
          <div className="items-center flex justify-center space-y-2">
            <p className="max-w-[800px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            <div className="w-1/2  py-4">
    <div className="text-center ">
        <h1 className="text-white text-2xl font-bold"> The all-in-one platform <br /> for dataset creation, curation, and cleaning, designed for training large language
              models in AI.</h1>
        <div className="mx-auto mt-2 h-1 w-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"></div>
    </div>
</div>
            </p>
          </div>
        </div>
        <div className="container grid max-w-sm items-start gap-8 px-4 mx-auto sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
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
    </section>
    <div className="absolute inset-0 z-0">
        <Image className="w-full h-screen"  src={hero} alt="hero image"/>
    {/* <img className="w-screen h-screen" src="https://w0.peakpx.com/wallpaper/18/8/HD-wallpaper-black-blue-boxes-black.jpg" alt=""/> */}
  </div> 
        </div>
       
            </>
    );
    }

    export default Hero;