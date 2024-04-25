'use client'
import Link from "next/link";
import { SVGProps } from 'react';

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

function HeroLight() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
      <div className="container space-y-12">
        <div className="flex flex-col mb-16 items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              The all-in-one platform for dataset creation, curation, and cleaning, designed for training large language
              models in AI.
            </p>
          </div>
          {/* <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Sign Up for Early Access
          </Link> */}
        </div>
        <div className="container grid max-w-sm items-start gap-8 px-4 mx-auto sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="flex flex-col items-center justify-center space-y-2">
            <DatabaseIcon className="h-10 w-10" />
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-bold">Dataset Creation</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Easily generate diverse and high-quality datasets for training AI models.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <DatabaseIcon className="h-10 w-10" />
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-bold">Dataset Curation</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Collaborate with teams to annotate, verify, and refine datasets for specific tasks.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <DatabaseIcon className="h-10 w-10" />
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-bold">Dataset Cleaning</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Leverage automated tools to preprocess and clean noisy data for improved model performance.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Contact Sales
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Tour the Platform
          </Link>
        </div> */}
      </div>
    </section>
  );
}

export default HeroLight;