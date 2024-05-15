import React from 'react'
import Link from 'next/link'
import { navLinks } from './constants'
import MobileMenu from './Mobilemenu'
import { FaDiscord } from "react-icons/fa6";


function Navbar() {
  return (
    <>
      <div className='flex sticky sm:px-16 px-6 justify-center items-center top-0 z-50'>
        <div className='xl:max-w-[1280px] w-full'>
          <nav className='align-middle flex w-full py-1 pb-5 pt-3 justify-between items-center navbar'>
            <Link href='/'>
              <div className='pt-5 text-2xl text-white dm-sans-heading'>
                <span className='font-bold text-md sm:text-lg md:text-xl lg:text-3xl' style={{ letterSpacing: '0.2em' }}>DATAFORMER</span>
              </div>
            </Link>
            <ul className='list-none md:flex text-sm md:text-lg lg:text-xl xl:text-2xl hidden justify-end items-center flex-1 mt-4'>
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  style={{
                    background: nav.id === 'call' ? 'none' : undefined
                  }}
                  className={`hover:underline  text-white rounded-xl p-2 ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
                    ${nav.id === 'call' ? 'bg-[#000000] text-white px-4 py-2 rounded-md cursor-pointer' : ''}`}
                >
                  <Link href={nav.href} target={nav.id === 'call' ? '_blank' : '_self'} rel="noopener noreferrer">
                    {nav.id === 'discord' ? (
                      <p className='text-4xl flex'>
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
