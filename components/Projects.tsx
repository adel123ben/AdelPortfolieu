"use client";

import {motion} from "framer-motion"
import React from "react";

interface ProjectProps{
    image: string;
    TiteProject: string;
}



const Projects: React.FC<ProjectProps> = ({
    image,
    TiteProject
}) => {
    const Projects = [1,2,3,4];
    
    
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
        className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="top-24 absolute uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>
        

        <div className="relative w-full flex mt-20 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
            {Projects.map((project, i) => (
                <div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <motion.img
                    initial={{
                        y: -300,
                        opacity: 0
                    }}
                    transition={{
                        duration: 1.2
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    className="h-56" src={image} alt="" />
                    <div className="px-0 space-y-10 md:px-10 max-w-6xl">
                        <h4 className="text-4xl font-semibold text-center"><span className="underline decoration-[#f7ab0a]">Clone study {i +1}</span>  : {TiteProject}</h4>
                    <p className="text-lg text-center md:text-left">J&apos;ai récemment entrepris un projet passionnant : le clonage ludique de Netflix en une application unique, entièrement codée en utilisant des emojis. Cette expérience créative fusionne l&apos;univers du streaming avec une esthétique emoji, offrant une expérience visuelle unique aux utilisateurs. Chaque emoji représente une fonction spécifique, ajoutant une touche ludique à la navigation et à la découverte de contenus. L&apos;objectif est de créer une plateforme divertissante où la technologie rencontre l&apos;amusement, redéfinissant ainsi la manière dont nous interagissons avec nos contenus préférés. 🎬📱✨





</p>
                    </div>
                </div>
            ))}
        </div>
        <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"/>
        </motion.div>
    )
}

export default Projects;