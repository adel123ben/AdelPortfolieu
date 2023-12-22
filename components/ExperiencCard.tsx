"use client";

import {motion} from "framer-motion"
import React from "react";



interface ExperienceCardProps{
    image: string;
    textforExperien: string;
    imageofLanguage: string;
    advantage: string
    BrandOfeXPERIENSE: string;
    advantage2: string
}

const ExperiencCard: React.FC<ExperienceCardProps> = ({
    image,
    textforExperien,
    imageofLanguage,
    advantage,
    BrandOfeXPERIENSE,
    advantage2
}) => {
    return(
        <article className="flex flex-col md:mt-[98px] rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
            <motion.img
            initial={{
                y: -100,
                opacity: 0
            }}
            transition={{
                duration: 1.2
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            className="h-32 w-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center" src={image} alt="" />
        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">{textforExperien}</h4>
            <p className="font-bold text-2xl mt-1">{BrandOfeXPERIENSE}</p>
            <div className="flex space-x-2 my-2">
                <img className="h-7 w-7" src={imageofLanguage} alt="" />
                <img className="h-7 w-7" src={imageofLanguage} alt="" />
                <img className="h-7 w-7" src={imageofLanguage} alt="" />
            </div>
            <p className="uppercase py-5 text-gray-300">Started work in 2022 an Ended 2023</p>
            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>{advantage}</li>
                <li>{advantage2}</li>
                
                
            </ul>
        </div>
        </article>
    )
}

export default ExperiencCard