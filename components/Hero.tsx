'use client'
import { useCallback } from "react";
import { SVGProps } from 'react';
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import Navbar from "./Navbar";
import Link from "next/link";
import image_section from "@/public/images/image_section.png"
import Image from "next/image";
import { TwitterTweetEmbed } from 'react-twitter-embed';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface DatabaseIconProps extends SVGProps<SVGSVGElement> {}


function Hero() {
const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
}, []);

const settings = {
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

return (
      <>

    <div className="relative z-10 mx-auto w-full overflow-hidden hero-background">
        <Navbar/>
                <div className="relative z-10 flex flex-col items-center justify-start mt-16 mb-16 text-center text-gray-200 tracking-tight">
        <div className="text-center ">
        {/* <h1 className="text-white text-3xl font-bold">  */}
        <h1 className="text-[25px] md:text-[2rem] lg:text-[3rem] xl:text-[4rem] font-spline font-medium">
        Powering LLMs <br/> with Synthentic Datasets
        </h1>
        {/* </h1> */}
        <div className="mx-auto mt-2 h-1 w-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"></div>
    </div>
    
        <p className="max-w-[800px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
        Create, curate and clean datasets for your custom Large Language Model fine-tuning.
        </p>

        <div className="mt-8">
          <Link target="_blank" href={"https://github.com/BhabhaAI"} >
        <button className="   relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs xl:text-md font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Explore Github
</span>
</button>
          </Link>
          <Link target="_blank" href={"https://cal.com/satpal/30min"} >
<button className="relative     inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs xl:text-md font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
<span className="relative  px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Book a call
</span>
</button>
          </Link>
        </div>
        <div className="mt-4">
        <a href="/about" className="hover:underline text-gray-200 ">
            Learn more  
        </a>
        </div>
    </div>  
    <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="absolute inset-0 z-0"
        options={{
        fullScreen: { enable: false, zIndex: 0 },
        fpsLimit: 120,
        particles: {
            color: {
            value: "#d1d1d8",
            },
            move: {
            enable: true,
            direction: "top",
            outModes: {
                default: "out",
            },
            speed: 1,
            },
            number: {
            value: 100,
            },
            opacity: {
            value: 0.5,
            random: true,
            },
            size: {
            value: 1,
            random: true,
            },
        },
        interactivity: {
        },
        }}
    />
    </div>

    {/* this will be the image section */}
    <div className="flex justify-center">
      <Image className="w-[80%] rounded-xl" src={image_section} alt="" />
    </div>
    {/* image section ends here */}


    {/* below is the testimonial section */}

    <div className="flex justify-center mt-20">
        <h1 className="text-4xl text-white">Testimonials</h1>
    </div>
      <div className="rounded-b-2xl ml-8 mt-10 w-[90%]">
        <Slider {...settings}>
          <div className="px-1">
            <div className="tweet-container">
              <TwitterTweetEmbed tweetId="1785410133646061727" />
            </div>
          </div>
          <div className="px-1">
            <div className="tweet-container">
              <TwitterTweetEmbed tweetId="1782296497406824755" />
            </div>
          </div>
          <div className="px-1">
            <div className="tweet-container">
              <TwitterTweetEmbed tweetId="1782461647497400324" />
            </div>
          </div>
          <div className="px-1">
            <div className="tweet-container">
              <TwitterTweetEmbed tweetId="1742613575217156547" />
            </div>
          </div>
          <div className="px-1">
            <div className="tweet-container">
              <TwitterTweetEmbed tweetId="1764931391748460788" />
            </div>
          </div>
          <div className="px-1">
            <div className="tweet-container">
              <TwitterTweetEmbed tweetId="1729893527667253431" />
            </div>
          </div>
          <div className="px-1">
            <div className="tweet-container">
              <TwitterTweetEmbed tweetId="1742605592730931296" />
            </div>
          </div>
          <div className="px-1">
            <div className="tweet-container">
              <TwitterTweetEmbed tweetId="1774100018581946448" />
            </div>
          </div>
          <div className="px-1">
            <div className="tweet-container">
              <TwitterTweetEmbed tweetId="1764679593082937443" />
            </div>
          </div>
        </Slider>
      </div>
            </>
);
}


export default Hero;