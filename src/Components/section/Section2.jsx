import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import React, { useRef } from 'react'

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {

  
  const containerRef = useRef()
  const headingRef = useRef()
  const splitInstance = useRef(null)

  useGSAP(() => {
    // Create a SplitText instance on the heading, splitting by words
    splitInstance.current = new SplitText(headingRef.current, {
      type: 'words',
      wordsClass: 'word' // optional class for styling
    })

    // Animate the split words(heading) with ScrollTrigger
    gsap.from(splitInstance.current.words, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 90%',
        end: 'top 30%',
        scrub: 2,
        markers: false,
      }
    })

    // Animate other fade groups in the container
    const elements = gsap.utils.toArray('.blurr')

    elements.forEach((el) => {
      const split = new SplitText(el, { type: 'chars' })

      gsap.from(split.chars, {
        opacity: 0,
        filter: 'blur(1px)',
        y: 1,
        x:100,
        stagger: 0.03,
        duration: 1,
        delay:-1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 95%',
          end: 'top 30%',
          scrub: false,
          markers: false,
        },
      })
    })

    // Cleanup function to revert SplitText when component unmounts
    return () => {
      splitInstance.current.revert()
    }
  }, [])

  return (
    <div>
        <section ref={containerRef} className='px-[7vw] pt-18 flex flex-col justify-between h-[100vh] w-[85vw] pb-5'>
          <h1 ref={headingRef} className='text-3xl w-[68vw] font-semibold'>Enabling traditional banks to offer affordable credit to SMEs beyond Tier-1, without raising the risk.</h1>

          <div className='flex justify-between'>
            <div className='w-[27vw] h-[20svh] flex flex-col gap-5 blurr'>
              <h1 className='text-3xl text-amber-600 font-semibold'>Deeper Credit Percolation aids financial Inclusion</h1>
              <h2 className='leading-2 font-semibold'>Reach SMEs that were not serviceable earlier due to lack of formal credit score and documentation.</h2>
            </div>
            <div className='w-[27vw] h-[20vh] flex flex-col gap-5 blurr'>
              <h1 className='text-3xl text-amber-600 font-semibold'>Better Network Risk Coverage and Assessment</h1>
              <h2 className='leading-2 font-semibold'>The risk is tied to the anchor by linking the entire supply chain invoices to the anchor invoice.</h2>
            </div>
          </div>

          <div className='flex justify-between'>
            <div className='w-[27vw] h-[20vh] flex flex-col gap-5 blurr'>
              <h1 className=' text-3xl text-amber-600 font-semibold'>Faster and Efficient Flow of Credit</h1>
              <h2 className='leading-2 font-semibold'>Complete digital loan disbursement to SMEs and collections from the anchor, with all compliance checks in place.</h2>
            </div>
            <div className='w-[27vw] h-[20vh] flex flex-col gap-5 blurr'>
              <h1 className='text-3xl text-amber-600 font-semibold'>Automated Reconciliation and Settlements</h1>
              <h2 className='leading-2 font-semibold'>The platform automatically reconciles the loan disbursement and collections.</h2>
            </div>
          </div>
        </section>
        
    </div>
  )
}

export default Section2