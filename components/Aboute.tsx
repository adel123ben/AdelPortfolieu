"use client";

import {motion} from "framer-motion"

type Props = {

}

const Aboute = ({}: Props) => {
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
        className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
           <h3 className="top-24 md:ml-10 absolute uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
        
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
            duration: 1.2
        }}
        src="https://www.usinenouvelle.com/mediatheque/2/6/4/000326462_896x598_c.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />


        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">
                Her is a <span className="underline decoration-[#f7ab0a]">letle</span> backround
            </h4>
            <p className="text-sm">👨‍💻 Jeune développeur passionné par le code et l&apos;innovation, je jongle entre lignes de code et idées créatives pour construire l&apos;avenir numérique. 🚀💻 En quête constante de défis, je m&apos;efforce d&apos;apprendre et de grandir dans le monde dynamique du développement. #CodeLife 🌐 Explorateur de nouvelles technologies et créateur de solutions informatiques novatrices</p>
        </div>
        </motion.div>
    )
}

export default Aboute;