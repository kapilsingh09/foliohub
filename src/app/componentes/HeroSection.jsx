"use client"

import { useState,useEffect } from "react";
import Link from "next/link"
import { motion } from "motion/react";
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";

const clientFocusedHeadings = [
    "Professional Video Editing That Elevates Your Brand",
    "Post-Production That Brings Your Vision to Life",
    "Trusted Video Editing for Creators & Businesses",
    "From Rough Cuts to Cinematic Stories",
    "Helping Creators Shine Through Seamless Editing"
  ];

  const Direct = [
    "Professional Video Editor for Hire",

"Cinematic Video Editing That Sells",

"Your Vision, Seamlessly Edited",

"Video Editing That Elevates Brands",

"Hire a Video Editor Who Delivers"
  ]
const HeroSection = () => {

    // const [index, setIndex] = useState(0);
    // useEffect(() => {
        
    //     const interval = setInterval(() => {
    //         setIndex((prev) => (prev + 1 ) % clientFocusedHeadings.length)
    //     }, 2000);

    //     return ()=> clearInterval(interval)
    // }, [])
    
        

  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center
    relative overflow-hidden mx-auto py-10 md:py-0
    ">   

    <div className="p-4 relative z-10 w-full text-center">
           <Spotlight
        className="-top-40 left-0 md:-top-40 md:left-90"
        fill="white"
      />
           <motion.h1
  className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold 
             bg-clip-text text-transparent bg-gradient-to-b 
             from-neutral-50 to-neutral-400"
  initial={{ opacity: 0, y: 40, }}   // start bottom-left & invisible
  animate={{ opacity: 1, y: 0 }}      // move to normal position
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  Your Vision, Seamlessly Edited
</motion.h1>



           <motion.p
  className="font-normal text-base md:text-lg mx-auto max-w-lg mt-6 text-neutral-300"
  initial={{ opacity: 0, y: 30 }}       // start lower & hidden
  animate={{ opacity: 1, y: 0 }}        // move up into place
  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} // delay so it follows h1
>
  I help brands and creators tell powerful stories through seamless video editing.  
  From raw footage to cinematic content, I bring your vision to life with precision and style.
</motion.p>

            <div className="mt-4">
    <Link className="" href={"/coureses"}>
     <Button borderRadius="2.2rem " className="hover:cursor-pointer transition-all duration-150 hover:bg-transparent ">

        
        Explore courses
        </Button>    
    </Link>
            </div>
    </div>

    </div>
  )
}

export default HeroSection
