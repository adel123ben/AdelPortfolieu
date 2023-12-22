"use client";

import {motion} from "framer-motion"
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoMailOpen } from "react-icons/io5";
import Link from "next/link";

const Header = () => {
    return(
        <div className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
            <motion.div 
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x:0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5
            }}
             className="flex flex-row items-center gap-2 space-x-2"
             >
                <FaFacebookSquare className="cursor-pointer" size={20} />
                <FaTwitter  className="cursor-pointer" size={20}/>
                <FaLinkedin className="cursor-pointer"  size={20} />
                <RiInstagramFill className="cursor-pointer"  size={20}/>
            </motion.div>


            <motion.div 
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5
            }}

            animate={{
                x:0,
                opacity: 1,
                scale: 1
            }}

            transition={{
                duration: 1.5
            }}
            
            className="flex flex-row items-center text-gray-300 cursor-pointer gap-2 space-x-1">
                <Link href="#contact">
                <IoMailOpen className="cursor-pointer" size={20} />
            
                </Link>
            
            </motion.div>
        </div>

    )
}

export default Header;