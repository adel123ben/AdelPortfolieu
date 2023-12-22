"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackGroundCercels from "./BackroundCerceles";
import Link from "next/link";
import {motion} from "framer-motion"

type Props = {

}

const Hero = ({}: Props) => {
    const [text, count] = useTypewriter({
        words: ["Hi The Name Adel Benmouhoub", "Guy-who-loves-Pizza.tsx", "<But Love To Code More />"],
        loop: true,
        delaySpeed: 2000,
    });
    return(
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackGroundCercels />
            <motion.img 
            initial={{
                x: -200,
                opacity: 0
    
            }}
            whileInView={{
                x: 0,
                opacity: 1
            }}
            transition={{
                duration: 0.8
            }}
            className="relative object-cover rounded-full h-32 w-32 mx-auto" src="https://www.cyber-cover.fr/uploads/conseils/images/5ee0e98eee510170369366.jpg" alt="" />
           <div className="z-20">
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                Developeur FullStack
            </h2>
           <h1 className="text-4xl lg:text-6xl font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#fa0303" />
           </h1>

           <div className="pt-5">
            <Link  href="#About">
            <button className="heroButton">Aboute</button>
            </Link>
            
            
            <Link href="#Experience">
            <button className="heroButton">Experience</button>
            </Link>
           
           <Link href="#Skils">
           <button className="heroButton">Skills</button>
           </Link>
            
            <Link href="#Project">
            <button className="heroButton">Projects</button>
            </Link>
            
           </div>
           </div>
          
        </div>
    )
}

export default Hero;