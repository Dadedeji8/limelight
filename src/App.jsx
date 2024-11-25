import { useState, useRef, useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from '../public/chdesky1-removebg-preview(1).png'
import img1 from './assets/img/2148956941.jpg'
import img2 from './assets/img/2508.jpg'
import img3 from './assets/img/8919.jpg'
import tree from './assets/img/tree-grows-coin-glass-jar-with-copy-space.png'
import Lenis from 'lenis'
import './App.css'
import 'lenis/dist/lenis.css'
// import ButtonComponent from './components/ButtonComponent'
import bgVideo from './assets/videos/bgmain.mp4'
import { Link } from 'react-router-dom';
import { CgArrowLongDown } from 'react-icons/cg';
import HeaderComponent from './components/HeaderComponent';
import NavbarComponent from './components/NavbarComponent';
import CardComponent from './components/CardComponent';
import { FaBriefcase, FaInstagram } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { ImInstagram } from 'react-icons/im';
;
gsap.registerPlugin(ScrollTrigger);
function App() {
  // Initialize Lenis
  const lenis = new Lenis();



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
  const aboutBox = useRef(null);

  useEffect(() => {
    const container = aboutBox.current
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
    }, '=');

  }

    , [])
  useEffect(() => { }, [])


  return (
    <>
      <div className=" relative top-0 left-0 w-full h-screen overflow-x-hidden">
        <NavbarComponent />
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
            your business deserves to be seen
          </h1>
          <h1 ref={heroTextRef} className='text-white font-extrabold text-center text-3xl lg:text-8xl  tracking-tighter leading-[10rem opacity-100]'>Step Into the spotlight with <span className='text-yellow-900 text-shadow '> Limelight</span></h1>
          <span ref={downArrow}>


            <a href="#about">< CgArrowLongDown className='text-white text-3xl relative -bottom-28' /></a>

          </span>
        </div>
      </div>
      <div className=" w-full ">
        <section className=" w-full  bg-[#0e0e0e]  pt-14 mt-0 overflow-x-hidden aboutUs" ref={aboutBox} >
          {/* Overlay section */}
          <div className='title mb-10  ' id='about'>
            <HeaderComponent title='ABOUT US' />
          </div>
          <div className='flex flex-wrap items-center pt-3  md:max-w-[1080px] m-auto  '>
            <div className='about-img md:flex-1'>
              <img src={logo} alt="" />

            </div>
            <div className='about-text md:flex-1'>
              <p className='text-center md:text-left text-white leading-loose'>Welcome to Limelight, where we specialize in helping businesses shine. We are a cutting-edge lead generation agency dedicated to connecting you with the right prospects to fuel your growth. With a strategic blend of data-driven insights, innovative technology, and personalized solutions, we bring your brand to the forefront of your industry.
              </p>
            </div>
          </div>
        </section>
        <section className=" w-full bg-[#0e0e0e] pt-14 mt-0 overflow-x-hidden" ref={aboutBox} >
          {/* Overlay section */}

          <div className='flex md:flex-wrap items-center pt-3 gap-3  flex-wrap-reverse  md:flex-row md:max-w-[1080px] m-auto '>

            <div className='about-text md:flex-1 flexflex-col gap-16 items-start'>
              <div className='md:flex mt-10 md:mt-0 md:justify-end'>
                <HeaderComponent title='Key principles' />
              </div>
              <p className='text-white leading-loose text-center md:text-right mt-10'>In Limelight we rely on data analysis and metrics to make informed decisions. Using tools and technologies to track user behaviour, measure key performance indicators (KPIs), and identify areas for improvement.
              </p>
            </div>
            <div className='about-img md:flex-1'>
              <img src={img1} alt="" />

            </div>
          </div>

          <div className="cards flex-wrap flex gap-5 max-w-[1200px] m-auto mt-20 px-10">
            <CardComponent icon='FaBriefcase' />
            <CardComponent />
            <CardComponent />
          </div>
          <section className='bg-[#F5F5F5] pt-16 relative '>
            <h1 className="text-green-600 font-bold text-3xl md:text-6xl text-center">How We Do It</h1>
            <div className="img-container relative items-start justify-center max-w-[450px] m-auto">
              <img src={tree} alt="" className='relative max-w-[150px] md:max-w-[260px] m-auto z-20' />
              <div className="relative text-sm left-[0.4rem] w-fit bottom-20 md:max-w-[185px] md:-left-6">
                <h1 className="text-black bg-pink-400 p-2 md:p-3 rounded  font-bold">Connet with hight quality leads</h1>
              </div>
              <div className="relative text-sm -left-1 w-fit bottom-44 md:bottom-60 md:max-w-[185px] md:-left-6">
                <h1 className="text-black border bg-orange-500 p-2 md:p-3 rounded  font-bold">Create large email list </h1>
              </div>
              <div className="relative text-sm right-[-15.2rem] w-fit bottom-48 md: max-w-[185px] md:-right-80">
                <h1 className="text-black bg-green-400 p-2 md:p-3 rounded  font-bold">Close deals via cold calls</h1>
              </div>
            </div>
          </section>
          <section className='my-11'>

            <HeaderComponent title='WE OFFER' />
            <section className='flex gap-5 justify-center my-14'>
              <Link to={'/'}>
                <div className="relative transition-all ease-in-out duration-300 card-offer  px-5 py-10 rounded hover:scale-[105%] bg-gray-900 border border-gray-700  hover:border-none   flex flex-col justify-center gap-8 text-white max-w-[350px] overflow-hidden">
                  <div>
                    <h1 className="text-5xl font-bold">
                      Data & Technology</h1>
                  </div>
                  <div>
                    <p className='leading-7 opacity-85'>

                      Together we make your ambition concrete and develop a future proof strategy to make it happen. No pointless PowerPoints, but an actionable strategy supported by your team and organization.
                    </p>
                    <span className="h-10 w-10 rounded-full bg-red-400 flex items-center justify-center mt-11 z-20 card-offer-arrow">
                      <BsArrowRight />
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gray-700 transition-transform duration-500 ease-in-out scale-y-0 hover:scale-y-100 origin-bottom">
                    hello
                  </div>
                </div></Link>


            </section>
          </section>

        </section>
        <section className='bg-blue-950 p-6 py-16'>
          <div className='my-20'>
            <HeaderComponent title='Contact Us' />
          </div>
          <form action="" className='px-10 flex flex-col gap-6'>
            <div className='border bg-blue-950 rounded-xl p-2'>
              <input type="text" className='focus:outline-none p-1 w-full bg-blue-950' placeholder='JohnDoe@email.com' />
            </div>
            <div className='border bg-blue-950 rounded-xl p-2'>
              <input type="text" className='focus:outline-none p-1 w-full bg-blue-950' placeholder='Name' />
            </div>
            <div className='border bg-blue-950 rounded-xl p-2'>
              <textarea className='focus:outline-none p-1 w-full bg-blue-950' placeholder='text' />
            </div>
            <button className='text-white font-extrabold bg-green-600 p-3 rounded-xl'>
              SUBMIT
            </button>
          </form>
          <div className='flex justify-center mt-10'>
            <Link to={'/'} className="flex items-center justify-center border-2 p-3 rounded-full hover:bg-white">
              <FaInstagram className='text-2xl text-white hover:text-yellow-900 font-semibold pointer' />
            </Link>
          </div>
        </section>
      </div >
    </>

  )
}

export default App
