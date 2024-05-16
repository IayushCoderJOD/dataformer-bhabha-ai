export const runtime = 'edge'
import Navbar from '@/components/Navbar'
import React from 'react'
// import { avatar } from '@/components/assets'

function About() {
    return (
      <div className=' bg-opacity-100 h-screen text-white'>
        <div className='relative'>
      <Navbar />
    </div>

        <div className=" divide-y divide-gray-200 px-6 sm:px-8 lg:px-10 w-full mx-auto max-w-screen-xl">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-4xl font-extrabold leading-9 tracking-tight dark:first-letter:text-white">
            About Us
          </h1>
        </div>
        
        <div className="items-start space-y-2 xl:gap-x-8 xl:space-y-0">

      <p className="text-lg mt-4">
        Dataformer - Create, Curate & Clean Datasets for Large Language Models.
      </p>
      {/* <br/>
      <p className="text-lg mt-4">
      We believe that AI should be accessible to everyone and benefit society as a whole.
    </p> */}
        </div>

      </div>
    </div>
      )
}

export default About