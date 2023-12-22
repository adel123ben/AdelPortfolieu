"use client";

import {motion} from "framer-motion"
import Skil from "./Skil";
import NewSkill from "./NewSkill";

type Props = {

}

const Skils = ({}: Props) => {
    return(
        <motion.div
        initial={{
            opacity: 0
        }} 
        whileInView={{
            opacity: 1
        }}
        transition={{
            duration: 1.5
        }}
        
        className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[200px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
          

          <h3 className="top-24 absolute uppercase tracking-[20px] text-gray-500 text-2xl">Skils</h3>
       <h3 className="top-36 absolute uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill to see the curent Profit
       </h3>

       <div className="">
       <NewSkill />
       </div>
        </motion.div>
    )
}

export default Skils;