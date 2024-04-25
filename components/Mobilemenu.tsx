'use client'

import { useState } from 'react'
import { navLinks } from './constants'
import Link from 'next/link'

export default function MobileMenu() {

  const [showMenu, setShowMenu] = useState(false)

  const handleLinkClick = () => {
    setShowMenu(false)
  }

  return (
  
    <div className='sm:hidden flex flex-1 justify-end items-center'>

    <img
      src={showMenu ? '/images/close_light.svg' : '/images/menu_light.svg'}
      alt='menu'
      width={28}
      height={28}
      style={{ objectFit: 'contain' }}
      onClick={() => setShowMenu((prev) => !prev)}
    />
  
    <div
      className={`${
        showMenu ? 'flex' : 'hidden'
      } p-6 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-950 dark:to-gray-900 absolute top-20 right-0 left-0 mx-4 my-2 rounded-xl sidebar`}
      style={{ minWidth: '100%' }} // Added style to take entire width
    >

    <ul className='list-none flex flex-col justify-end items-center flex-1'>
      {navLinks.map((nav, index) => (
        <li
          key={nav.id}
          className={`text-2xl ${
            index === navLinks.length - 1 ? 'mb-0' : 'mb-4'
          } ${
            nav.id === 'call'
              ? 'bg-[#2b2826] text-white px-4 py-2 rounded-md cursor-pointer'
              : ''
          }`}
        >
          <Link href={nav.href} onClick={handleLinkClick} target={nav.id === 'call' ? '_blank' : '_self'} rel={nav.id === 'call' ? 'noopener noreferrer' : ''}>
            {nav.title}
          </Link>
        </li>
      ))}
    </ul>

    </div>
  </div>
  
)
}


