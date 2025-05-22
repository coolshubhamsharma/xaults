import { useGSAP } from '@gsap/react'
import group from '../../assets/Group.webp'
import Button from '../Button/Button'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {

  useGSAP(()=>{
   const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".begin",
      start: "top 80%",
      end: "top 30%",
      scrub: false,
      markers: false,
    },
  });

   tl.from(".begin",{
    y:-100,
    opacity:0,
    duration:1,
    delay:0.1,
   })
   
   tl.from(".first",{
    x:200,
    opacity:0,
    duration:1,

   })

    tl.from(".third",{
    x:-100,
    opacity:0,
    duration:1,

   })

   tl.from(".second",{
    y:100,
    opacity:0,
    duration:1,
   })

    
    tl.from(".fourth",{
      y:-100,
      opacity:0,
      duration:1.2,
      ease:"bounce.out",   
    })
    
  },{scope:".section",dependencies:[]})

  return (
    <section className="bg-black p-[7vw] flex flex-col justify-between h-[100vh] section">
            <h1 className='text-white text-5xl font-bold begin'>Programmable CBDC Solutions</h1>
            <div className='flex mt-20 gap-10 '>
              <div className='flex flex-col justify-between gap-10 w-[30vw] first'>
                <h1 className='text-3xl font-semibold text-amber-600'>Merchant Loyalty Program</h1>
                <h2 className='text-white'>Affordable loyalty program for small merchants using Programmable CBDCs.</h2>
              </div>

              <div className='flex flex-col justify-between gap-10 w-[30vw] second'>
                <h1 className='text-3xl font-semibold text-amber-600'>Corporate Expense Management</h1>
                <h2 className='text-white'>Offer seamless interface to corporate clients for distributing employee benefits in CBDCs.</h2>
              </div>

              <div className='flex flex-col justify-between gap-10 w-[30vw] third'>
                <h1 className='text-3xl font-semibold text-amber-600'>Digital Escrow</h1>
                <h2 className='text-white'>Efficient and transparent digital escrow solutions managed by smart contracts using CBDCs.</h2>
              </div>
            </div>
            <div className='mt-20 fourth'>
              <Button text="Learn More" radius="4xl"/>
            </div>
          </section>
  )
}

export default Section3