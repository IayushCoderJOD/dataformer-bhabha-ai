import React from 'react'
import Link from 'next/link'
// import { white_logo } from './assets'
import { navLinks } from './constants'
import MobileMenu from './Mobilemenu'

function Navbar() {

  return (

    <div className='flex sticky sm:px-16 px-6 justify-center items-center  top-0 z-50'>
      <div className='xl:max-w-[1280px] w-full'>

        <nav className='flex w-full py-1 pb-5 justify-between items-center navbar'>
          <Link href='/'>
            <div className='text-2xl text-white dm-sans-heading'><span className='font-bold' style={{ letterSpacing: '0.2em' }}>DATAFORMER</span></div>
            {/* <img src='/images/logo.png' alt='Dataformer' width={180} height={60} /> */}
          </Link>

          {/* <img src='/images/white_logo.png' alt='logo'
            width={50} height={50} />

          <Link href='/' className='text-2xl mt-6'>habha AI</Link> */}

          <ul className='list-none sm:flex hidden justify-end items-center flex-1 mt-6'>
            {navLinks.map((nav, index) => (

              <li
                key={nav.id}
                style={{
                  background: nav.id === 'call'
                    ? 'linear-gradient(90deg, rgba(10,0,89,1) 0%, rgba(94,195,225,1) 96%, rgba(0,212,255,1) 100%)'
                    : undefined
                }}
                className={`hover:underline text-2xl text-white rounded-xl p-2 ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
                  } ${nav.id === 'call'
                    ? 'bg-[#000000] text-white border-2 border-white px-4 py-2 rounded-md cursor-pointer'
                    : ''
                  }`}
              >
                <Link href={nav.href} target={nav.id === 'call' ? '_blank' : '_self'} rel="noopener noreferrer">
                  {nav.title}
                </Link>
              </li>
            ))}

            {/* <li>
              <div className="md:block mx-5 flex transform  ">
                <a href="#">
                  <button className="flex px-2.5 pt-px pb-0.5 border-white border-solid border-2 text-xl text-white hover:bg-white hover:text-white justify-center items-center">
                    <span>Sign in</span>
                    <svg
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      className=" a-icon--arrow-north-east400 a-icon--text a-icon--no-align top-[0.05em] relative f-ui-1 ml-2"
                      style={{ width: "1em", height: "1em" }}
                      data-new=""
                      aria-hidden="true"
                      data-v-cbc994d7=""
                    >
                      <polygon
                        fill="currentColor"
                        points="5 4.31 5 5.69 9.33 5.69 2.51 12.51 3.49 13.49 10.31 6.67 10.31 11 11.69 11 11.69 4.31 5 4.31"
                        data-v-cbc994d7=""
                      />
                    </svg>

                  </button>
                </a>
              </div>
            </li> */}

          </ul>

          <MobileMenu />

        </nav>

      </div>
    </div>

  )
}

export default Navbar