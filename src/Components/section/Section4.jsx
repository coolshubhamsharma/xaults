import { useGSAP } from "@gsap/react"
import {awards , clients} from "../../assets/assets"
import Awards from '../../Components/Awards/Awards'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const Section4 = () => {

   useGSAP(() => {
    const awardItems = gsap.utils.toArray(".award > *"); // select direct children of .award

    gsap.from(awardItems, {
      opacity: 0,
      x: 100,
      duration: 0.7,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".award",
        start: "top 80%",
        toggleActions: "play none none none",
        markers: false,
      },
      ease: "power3.out"
    });
  }, []);

  return (
    <section className='pl-[6vw] bg-gray-50'>
            <h1 className='text-3xl font-semibold pt-10'>Awards and Recognitions</h1>
            <div className='flex flex-wrap justify-items-end award'>
              
                {awards.map((item,index)=>{
                  return (
                    <Awards key={index} img={item.img} text={item.text}/>
                  )
                })}
              
            </div>
          </section>
  )
}

export default Section4