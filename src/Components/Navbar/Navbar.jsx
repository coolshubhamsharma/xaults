import { useGSAP } from '@gsap/react';
import React from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
// import SVGIcon from '../../assets/logo.svg?react'


const Navbar = () => {

  var tl = gsap.timeline();

  useGSAP(()=>{
    tl.from(".logo",{
        y:-30,
        duration:1,
        opacity:0,
        delay:0.4
    })

    tl.from("h4",{
        y:-30,
        duration:1,
        opacity:0,
        delay:0.5,
        stagger:0.3
    })
  },{scope:".nav",dependencies:[]})


  return (
    <div className='flex justify-between bg-black px-10 nav'>
        <div className='m-3'>
            <Link to="/"><h1 className='text-6xl text-white font-serif logo'>xaults<span className='text-amber-600'>*</span></h1></Link>   
        </div>
        <div className='flex justify-between m-2 p-2 gap-25 text-white'>
            <div className='flex justify-between gap-10 mt-3'>
                <Link to="/"><h4 className='text-lg hover:text-amber-600 hover:cursor-pointer'>Home</h4></Link>
                <h4 className='text-lg hover:text-amber-600 hover:cursor-pointer'>Solutions</h4>
                <h4 className='text-lg hover:text-amber-600 hover:cursor-pointer'>More</h4>
            </div>
            <h4><Button text={"Book a Demo"} radius={"4xl"}/></h4>
        </div>
    </div>
  )
}

export default Navbar