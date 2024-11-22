import { useState, useRef, useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from '../public/chdesky1-removebg-preview(1).png'
import Lenis from 'lenis'
import './App.css'
import 'lenis/dist/lenis.css'
// import ButtonComponent from './components/ButtonComponent'
import bgVideo from './assets/videos/bgmain.mp4'
import { Link } from 'react-router-dom';
import { CgArrowLongDown } from 'react-icons/cg';
import HeaderComponent from './components/HeaderComponent';
;
gsap.registerPlugin(ScrollTrigger);
function App() {
  // Initialize Lenis
  const lenis = new Lenis();

  // Listen for the scroll event and log the event data
  // lenis.on('scroll', (e) => {
  //   console.log(e);
  // });

  // Use requestAnimationFrame to continuously update the scroll

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  //this is the animation sectin
  requestAnimationFrame(raf);
  const heroTextRef = useRef(null)
  const smallerHeroText = useRef(null)
  const downArrow = useRef(null)
  const boxRef = useRef(null);

  useEffect(() => {
    const container = boxRef.current
    // timeline for hero section
    const tl = gsap.timeline({
      defaults: {
        duration: 1.5,
        ease: 'Power3.easeInOut'
      },

    })

    tl.fromTo(heroTextRef.current, { y: 80, opacity: 0 }, {
      y: 0,
      opacity: 1
    }).to(smallerHeroText.current, { opacity: 1, y: 0 })

    gsap.to(downArrow.current, {
      delay: .3,
      y: 45,
      yoyo: true,
      repeat: -1, // Infinite looping
      duration: 1,
      ease: "power1.inOut"
    });
    // timeline for the scroll section
    const sectionTl = gsap.timeline(

      {
        defaults: {
          duration: 1.5,
          ease: 'Power3.easeInOut'
        },
        scrollTrigger: {
          trigger: container,
          start: "top 80%", // Start animation when the top of the container is 80% in the viewport
          end: "90% 90%", // End animation when the bottom is 20% in the viewport
          scrub: true, // Sync animation with scroll
          markers: true, // Enable markers for debugging
        },
      }
    )
    // this is for the scroll section
    sectionTl.fromTo(container.querySelector(".title"), {
      opacity: 0,
      y: '-50'
    }, {
      opacity: 1,
      y: 0
    }).fromTo(container.querySelector(".about-text"),
      {
        x: "100%",
        opacity: 0
      },
      {
        x: 0,
        opacity: 1
      }
    ).fromTo(
      container.querySelector(".about-img"),
      {
        x: "-100%",
        opacity: 0,
        scale: 0.8
      },

      {
        x: 0,
        opacity: 1,
        scale: 1.2
      },
    )
  }

    , [])


  return (
    <>
      <div className=" relative top-0 left-0 w-full h-screen overflow-x-hidden">
        <nav className='absolute px-9 pt-5 z-30'>
          <div className=" text-white hover:text-yellow-900 duration-500 flex items-center justify-center cursor-pointer">
            <Link to={'/'} className='rounded-full cursor-pointer text-3xl font-black text-shadow-lg'>
              LIMELIGHT
            </Link>
          </div>
        </nav>
        <div className="w-screen h-screen absolute bg-black  saturate-200 contrast-150 -z-10 select-none opacity-70 ">

        </div>
        <video
          src={bgVideo}
          className="w-screen h-screen absolute object-cover -z-20 select-none "
          loop
          autoPlay
          muted
        ></video>
        <div className='px-3 absolute top-0 left-0 z-20 w-full h-svh flex items-center flex-col justify-center'>
          <h1 ref={smallerHeroText} className=' text-slate-600 font-bold uppercase md:text-2xl md:leading-loose md:tracking-[1.1rem] text-center opacity-0 translate-y-36 '>
            your business deserves to be seen
          </h1>
          <h1 ref={heroTextRef} className='text-white font-extrabold text-center text-3xl lg:text-8xl  tracking-tighter leading-[10rem opacity-100]'>Step Into the spotlight with <span className='text-yellow-900 text-shadow '> Limelight</span></h1>
          <span ref={downArrow}>


            <a href="#about">< CgArrowLongDown className='text-white text-3xl relative -bottom-28' /></a>

          </span>
        </div>
      </div>
      <div className=" w-full h-screen">
        {/* Overlay section */}
        <section className="h-screen w-full bg-[#0e0e0e] py-14 mt-0 overflow-x-hidden" ref={boxRef} >
          <div className='title mb-10 ' id='about'>
            <HeaderComponent />

          </div>
          <div className='flex flex-wrap items-center px-3  md:max-w-[1080px] m-auto'>
            <div className='about-img md:flex-1'>
              <img src={logo} alt="" />

            </div>
            <div className='about-text md:flex-1'>
              <p className='text-white leading-loose'>Welcome to Limelight, where we specialize in helping businesses shine. We are a cutting-edge lead generation agency dedicated to connecting you with the right prospects to fuel your growth. With a strategic blend of data-driven insights, innovative technology, and personalized solutions, we bring your brand to the forefront of your industry.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>

  )
}

export default App
