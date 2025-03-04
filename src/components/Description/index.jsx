"use client"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import UnderLine from '../Underline/index'
import styles from './Style.module.css'
import Image from "next/image";


gsap.registerPlugin(ScrollTrigger);

function About() {


    useGSAP(() => {
    gsap.from('.aboutHeading h1', {
        y: 120,
    })
    gsap.to('.underline', {
        width: '100%',
        duration: 1.2,
    })
    gsap.from('.aboutText h2', {
        y: 50,
        stagger: 0.1,

    })
    gsap.from('.rightText h5', {
        opacity: 0,
        stagger: 0.1
    })
    gsap.to('.underline2', {
        width: '100%',
        duration: 1.2,
    })
    gsap.from('.aboutText', {
        y: 50,
        opacity: 0,
        duration: 1
    })

    })

  return (
    <div className="page4 relative sm:flex gap-[5vw]  w-full  px-[4vw] py-[16vw]
        sm:px-[4vw]
    ">
        <div className="left">
            <div className=" sm:pl-[14vw] ">
                <div className="font-[silkSerif] text-[4.6vw] 
                    sm:text-[2.6vw] sm:leading-[4vw]"
                >
                    <h2>01</h2>
                </div>             
            </div>
        </div>
        <div className="right">
            <div className="">
                <div className="aboutHeading overflow-hidden pb-[3vw] sm:pb-0">
                    <h1 className="text-[8vw] leading-[10vw] tracking-tighter
                        sm:text-[6vw] font-[PlinaReg] sm:leading-[6vw] sm:tracking-normal
                        uppercase"
                    >
                        Insprano & Udaan
                    </h1>
                </div>
                <UnderLine marginBottom='4vw' marginTop='4vw' />
                <div 
                    className="sm:w-2/4 text-[5.5vw] tracking-normal leading-[6vw] font-[PlinaReg] pt-[8vw] sm:pt-0
                    sm:text-[1.8vw] sm:leading-[2.2vw] text-justify"
                >
                    <p className="aboutText overflow-hidden">
                        Welcome to the grand confluence of 
                        technology and culture. Insprano, 
                        our premier technical festival, 
                        joins forces with Udaan, our vibrant 
                        cultural celebration, bringing you 
                        an unprecedented fusion of innovation 
                        and artistic expression.
                    </p>
                </div>
                <div className="relative flex flex-col mt-8 sm:flex-row sm:mt-16 gap-8 ">
                    <div className=" order-2 sm:order-1  sm:w-1/2">
                        <Image 
                            src="https://images.unsplash.com/photo-1535223289827-42f1e9919769"
                            alt="Person wearing VR headset"
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover"
                            loading="lazy"
                            quality={90}
                        />
                    </div>
                    <div 
                        className="rightText order-1 sm:order-2 w-2/3  text-[3.2vw] font-[PlinaReg] leading-[5vw] 
                        text-[#cbcaca]
                        sm:w-1/5  sm:text-[.9vw] sm:leading-[1.4vw]"
                    >
                        <h5 className="mb-8">Experience the perfect blend of technical innovation and cultural excellence in this unique dual festival celebration.</h5>
                        <h5>
                            Join us for workshops, competitions, performances, and much more. Connect with fellow enthusiasts and celebrate the spirit of creativity and innovation.
                        </h5>
                    </div>
                    {/* Stats Box */}
                    <div className="order-3 w-full text-white
                        px-[4vw] pt-[2vw] pb-[12vw]
                        sm:absolute top-[50%] left-[35%] 
                        sm:w-[34vw] sm:px-[3vw] sm:py-[2vw] font-[PlinaReg]
                        bg-[#2D3436]" // Dark gray option
                        // OR try these alternatives:
                        // bg-[#2D3436] - slate gray
                        // bg-[#2C3E50] - deep blue-gray
                        // bg-[#2B2B2B] - charcoal
                        // bg-[#1E293B] - slate blue
                    >
                        <div className="row flex items-start sm:items-center justify-between 
                            border-b-[.9px] border-white py-[5vw] sm:py-[2vw]">
                            <h3 className="sm:text-[1.4vw] whitespace-nowrap text-[3.6vw]">Events</h3>
                            <p className="w-1/2 tracking-normal text-[3.4vw] leading-[4vw] 
                                sm:w-2/4 sm:text-[.8vw] sm:leading-[.9vw]">
                                50+ Technical & Cultural Events
                            </p>
                        </div>
                        <div className="row flex items-start sm:items-center justify-between py-[5vw]
                        border-b-[.9px] border-white sm:py-[2vw]">
                            <h3 className="text-[3.6vw] sm:text-[1.4vw]">Prize Pool</h3>
                            <p className="w-1/2 sm:w-2/4 sm:text-[.8vw] sm:leading-[.9vw] tracking-normal text-[3.4vw] 
                            leading-[4vw]">₹5 Lakhs+ Worth Prizes</p>
                        </div>
                        <div className="row flex items-start sm:items-center justify-between py-[5vw]
                        border-b-[.9px] border-white sm:py-[2vw]">
                            <h3 className="sm:text-[1.4vw] text-[3.6vw]">Workshops</h3>
                            <p className="w-1/2 sm:w-2/4 sm:text-[.8vw] sm:leading-[.9vw] tracking-normal text-[3.4vw] leading-[4vw]">15+ Industry Expert Sessions</p>
                        </div>
                        <div className="row flex items-start sm:items-center justify-between py-[5vw]
                        border-b-[.9px] border-white sm:py-[2vw]">
                            <h3 className="sm:text-[1.4vw] text-[3.6vw]">Participation</h3>
                            <p className="w-1/2 sm:w-2/4 sm:text-[.8vw] sm:leading-[.9vw] tracking-normal text-[3.4vw] leading-[4vw]">2000+ Expected Participants</p>
                        </div>
                        <div className="row flex items-start sm:items-center justify-between py-[5vw]
                        border-b-[.9px] border-white sm:py-[2vw]">
                            <h3 className="sm:text-[1.4vw] text-[3.6vw]">Duration</h3>
                            <p className="w-1/2 sm:w-2/4 sm:text-[.8vw] sm:leading-[.9vw] tracking-normal text-[3.4vw] leading-[4vw]">3 Days of Non-Stop Action</p>
                        </div>
                    </div>        
                </div>
                <UnderLine marginBottom='1vw' marginTop='18vw' />
                <p className="font-[PlinaReg] text-[3.5vw] pt-[3vw] sm:pt-0 sm:text-[.8vw]">2K25</p>
            </div>    
        </div>
    </div>
  )
}

export default About