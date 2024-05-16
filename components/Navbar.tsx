'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { navLinks } from './constants'
import MobileMenu from './Mobilemenu'
import { FaDiscord } from "react-icons/fa6";


function Navbar() {
  const [toggle,setToggle]=useState(true);
  return (
    <>
      <div className='flex sticky sm:px-16 px-6 justify-center items-center top-0 z-50'>
        <div className='xl:max-w-[1280px] w-full'>
          <nav className='align-middle flex w-full py-1 pb-5 justify-between items-center navbar'>
            <Link href='/'>
              <div className='md:mt-12 mt-24 text-2xl text-white dm-sans-heading'>
                <span className='font-bold text-md sm:text-lg md:text-xl lg:text-3xl' style={{ letterSpacing: '0.2em' }}>DATAFORMER</span>
              </div>
            </Link>
              <button onClick={()=>{
                setToggle(!toggle)
              }} className={!toggle?'block lg:hidden top-9 absolute right-28':'block lg:hidden top-9 absolute right-5 text-2xl text-white'}>{!toggle?"❌":"☰"}</button>
            <ul className={!toggle?'relative md:top-5 top-16 ml-32 sm:ml-48 md:ml-52  list-none md:flex  text-md md:text-lg lg:text-xl xl:text-2xl justify-end items-center flex-1 ':' md:flex  hidden'}>
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  
                  style={{
                    background: nav.id === 'call' ? 'bg-yellow-900' : undefined
                  }}
                  className={`mt-2 hover:underline text-white rounded-xl p-2 ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
                    ${nav.id === 'call' ? 'relative inline-flex items-center justify-center  p-2 text-xs mr-4 me-2 overflow-hidden md:p-4  md:text-sm xl:text-md font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-pink-500 group-hover:from-blue-600 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800' : ''}`}
                >
                  <Link href={nav.href} target={nav.id === 'call' ? '_blank' : '_self'} rel="noopener noreferrer">
                    {nav.id === 'discord' ? (
                      <p className='text-4xl flex'>
                        <FaDiscord /> <span className='text-xs'>Join discord</span>
                      </p>
                    ) : (
                      nav.title
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <MobileMenu />
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
