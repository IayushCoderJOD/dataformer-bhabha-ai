export const runtime = 'edge'
import Navbar from '@/components/Navbar'
import React from 'react'

function Contact() {
  return (
    <>
     <div className='relative'>
      <Navbar />
    </div>
    <div className=' bg-opacity-100 h-screen text-white'>
    <div className="divide-y divide-gray-200 px-6 sm:px-8 lg:px-10 w-full mx-auto max-w-screen-xl">
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-white">
        Contact Us
      </h1>
    </div>
    <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
      {/* <div className="flex flex-col items-center pt-8">
        <Image
        src={avatar}
          alt="avatar"
          className="h-48 w-48 rounded-full"
          />
      </div> */}
      <div className="prose lg:prose-xl max-w-none py-8 xl:col-span-2">
  <p className="text-lg">
    Drop us an email: contact@dataformer.ai
  </p>
</div>

    </div>
  </div>
      </div>
          </>
  )
}

export default Contact