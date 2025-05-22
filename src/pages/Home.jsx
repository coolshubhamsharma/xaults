import React, { useRef } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Button from '../Components/Button/Button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {awards , clients} from "../assets/assets"
import Awards from '../Components/Awards/Awards'
import Backed from '../assets/backedby.webp'
import Section2 from '../Components/section/Section2'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Section3 from '../Components/section/Section3'
import Section4 from '../Components/section/Section4'
import Section5 from '../Components/section/Section5'

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  useGSAP(()=>{
    gsap.from("h1",{
      x:-40,
      duration:1,
      delay:1.5,
      opacity:0,
      stagger:0.3
    })
  },{scope:".text",dependencies:[]});


  const containerRef = useRef();

  useGSAP(() => {

    const elements = gsap.utils.toArray('.bounce-text');


    gsap.from(".bounce-text",{
      y:-100,
      opacity:0,
      duration:1.5,
      ease:"bounce.out",
      delay:1,
       scrollTrigger: {
          trigger: ".bounce-text",
          start: 'top 80%',
          end: 'top 30%',
          scrub: false,
          markers: false,
        },
    })

    elements.forEach((el) => {
      const split = new SplitText(el, { type: 'chars' });

      gsap.from(split.chars, {
        x: -100,
        opacity: 0,
        ease: 'bounce.out',
        stagger: 0.02,
        duration: 1.2,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          end: 'top 30%',
          scrub: false,
          markers: false,
        },
      });
    });
  }, {scope:".div", dependencies:[]});

  return (
    <div>
        <Navbar/>

        <section className='bg-black  pt-18 px-[7vw] flex-col justify-between text pb-5 '>
            <div className='flex flex-col justify-between h-[40vh]'> 
                <h1 className='text-white text-7xl'>India's First</h1>
                
                <h1 className='text-white text-7xl'>Deep-Tier Supply Chain</h1>
                
                <h1 className='text-white text-7xl'>Financing Platform</h1>
            </div>
            <br />
            <br />
            <h1 className='text-4xl text-amber-600'>Built on DLT and Smart Contracts</h1>
            <br />
            <br />
            <h1><Button text={"Book a Demo"} radius="4xl"/></h1>
        </section>
        
        <Section2/>

        <div ref={containerRef} className='flex flex-col justify-between pt-25 div'>
            <h1 className='text-3xl text-center font-semibold bounce-text'>If you’d like more information about our features, get in touch today.</h1>
            <div className='text-center mt-10 mb-4 bounce-text'>
              <Button text={"Get In Touch"} radius="4xl"/>
            </div>
        </div>

          <Section3/>

          <Section4/>

          <Section5/>

          <footer className='bg-[#1F2330] flex justify-between p-[5vw]'>
            <div className='w-[15vw] flex flex-col justify-between'>
              <h1 className='text-amber-600 text-xl font-semibold'>Contact</h1>
              <h2 className='text-gray-200 mt-5 text-lg'>F 303, Kruthi Apartments,Hennur, Bengaluru, Karnataka, India, 560043 sales@xaults.com +91 9920932862</h2>
              <h2 className='text-white mt-5'><Button text="Contact Us" radius="4xl"/></h2>
            </div>

            <div className='w-[28vw]'>
              <h1 className='text-amber-600 text-xl font-semibold'>Ready to transform your financial landscape?</h1>
              <h2 className='text-gray-200 mt-5 text-lg'>Experience seamless transactions, enhanced security, and unparalleled convenience.</h2>
              <div className='text-gray-200 flex flex-col'>
                <label className='mt-8' htmlFor="Email">Email*</label>
                <div>
                  <input type='email' name='email' className=' mt-2 border border-white h-[7vh] w-[20vw] rounded-3xl' />
                  <h1 className='mt-8'><Button text="Submit" radius="4xl"/></h1>
                </div>
              </div>
            </div>

            <div className='w-[15vw]'>
              <h1 className='text-amber-600 text-xl font-semibold'>Menu</h1>
              <div className='text-gray-200 mt-5 text-lg'>
                <h2>Home</h2>
                <h2>Solutions</h2>
                <h2>Technology</h2>
                <h2>About Us</h2>
              </div>
            </div>

            <div className='w-[15vw]'>
              <h1 className='text-amber-600 text-xl font-semibold'>Follow us on</h1>
              <div className='text-gray-200 mt-5 text-lg'>
                <h2>LinkedIn</h2>
                <h2>X(Twitter)</h2>
              </div>
            </div>
          </footer>
    </div>
  )
}

export default Home