import {awards , clients} from "../../assets/assets"
import Awards from '../../Components/Awards/Awards'
import Backed from '../../assets/backedby.webp'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section5 = () => {

    useGSAP(() => {
    const awardItems = gsap.utils.toArray(".clients > *"); // select direct children of .award

    gsap.from(awardItems, {
      opacity: 0,
      x: 100,
      duration: 0.7,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".clients",
        start: "top 80%",
        toggleActions: "play none none none",
        markers: false,
      },
      ease: "power3.out"
    });

    gsap.from(".backed",{
        opacity: 0,
      x: 100,
      duration: 0.7,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".clients",
        start: "top 80%",
        toggleActions: "play none none none",
        markers: false,
      },
    })
  }, []);

  return (
    <section className='pl-[6vw] pr-[5vw] pt-10 bg-gray-50 flex flex-col'>
            <div className='flex'>

              <div className='flex flex-col'>
                <h1 className='text-3xl font-semibold pt-10'>Our Cilents</h1>
                <div className='flex clients'>
                  {clients.map((item,index)=>{
                    return (
                      <Awards key={index} img={item.img} text={item.text}/>
                    )
                  })}
                </div>
              </div>

              <div className='flex flex-col'>
                <h1 className='text-3xl font-semibold pt-10'>Backed By</h1>
                <div className='mt-10 backed'>
                  <img src={Backed} alt="" />
                </div>
              </div>
            </div>
          </section>
  )
}

export default Section5