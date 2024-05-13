'use client'
import Link from "next/link";
import { SVGProps } from 'react';
import bg_img from "@/public/images/bg.png"
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

function  HeroLight() {
  return (
    <>
   <div className="flex ">
  <div className="bg-[#020204] p-5 w-[60%]">
    <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
      <div className="container space-y-12">
        <div className="flex flex-col mb-16 items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <p className="max-w-[800px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              The all-in-one platform for dataset creation, curation, and cleaning, designed for training large language
              models in AI.
            </p>
          </div>
        </div>
        <div className="container grid max-w-sm items-start gap-8 px-4 mx-auto sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="flex flex-col items-center justify-center space-y-2">
            <DatabaseIcon className="h-10 w-10 text-white" />
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-bold">Dataset Creation</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Easily generate diverse and high-quality datasets for training AI models.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <DatabaseIcon className="h-10  text-white w-10" />
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-bold">Dataset Curation</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Collaborate with teams to annotate, verify, and refine datasets for specific tasks.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <DatabaseIcon className="h-10 w-10 text-white" />
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-bold">Dataset Cleaning</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Leverage automated tools to preprocess and clean noisy data for improved model performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div>
    <Image className="w-[100%]" src={bg_img} alt=""/>
  </div> 
</div>

            </>
  );
}

export default HeroLight;