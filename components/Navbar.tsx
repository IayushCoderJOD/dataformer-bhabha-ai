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
          <nav className='align-middle flex w-full  pb-5 justify-between items-center navbar'>
            <Link href='/'>
              <div className='md:mt-10 mt-5 text-2xl text-white dm-sans-heading'>
                <span className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl' style={{ letterSpacing: '0.2em' }}>DATAFORMER</span>
              </div>
            </Link>
              <button onClick={()=>{
                setToggle(!toggle)
              }} className={!toggle?'block md:hidden top-5 absolute right-5 text-xl text-white':'block md:hidden top-5 absolute right-5 text-xl text-white'}>{!toggle?"❌":"☰"}</button>
            <ul className={!toggle?'bg-black md:bg-transparent  justify-center w-screen p-4 pl-[45%] bg-opacity-95 rounded-xl absolute md:-top-5 top-12 right-0 sm:ml-48 md:ml-52  list-none md:flex  text-md md:text-lg lg:text-xl xl:text-2xl  items-center flex-1 ':' md:flex  hidden'}>
              
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  style={{
                    background: nav.id === 'call' ? 'bg-yellow-900' : undefined
                  }}
                  className={`mt-10 hover:underline text-xl text-white rounded-xl p-2 pt-1 pb-1 ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
                    ${nav.id === 'call' ? 'relative inline-flex items-center justify-center  p-2 text-xs mr-4 me-2 overflow-hidden md:p-2 -top-0  md:text-sm xl:text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-pink-500 group-hover:from-blue-600 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800' : ''}`}
                >
                  <Link href={nav.href} target={nav.id === 'call' ? '_blank' : '_self'} rel="noopener noreferrer">
                    {nav.id === 'discord' ? (
                      <p className='text-4xl relative -top-0 pl-3 lg:pl-5 flex'>
                        <FaDiscord />
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
