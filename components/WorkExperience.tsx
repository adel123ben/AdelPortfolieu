"use client";

import {motion} from "framer-motion"
import ExperiencCard from "./ExperiencCard";


type Props = {

}
const WorkExperience = ({}: Props) => {
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
        className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
            <h3 className="top-24 absolute uppercase tracking-[20px] text-gray-500 text-2xl md:mt-[-15px]">Experience</h3>
            <div className="w-full flex md:mt-16 space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
            <ExperiencCard image="https://w7.pngwing.com/pngs/797/639/png-transparent-snapchat-logo-computer-icons-social-media-snapchat-snapchat-logo-text-desktop-wallpaper-internet-thumbnail.png" BrandOfeXPERIENSE="Snap" advantage="He take me 1days for build" advantage2="I learn typscript" textforExperien="Snapchat Clone"  imageofLanguage="https://melvynx.com/icons/react-rainbow.svg"/>
                <ExperiencCard advantage2='I learn the code' advantage="Code the app in 2 days" BrandOfeXPERIENSE="Tiktok" textforExperien="Tiktok Clone" image="https://static.vecteezy.com/system/resources/thumbnails/016/716/450/small/tiktok-icon-free-png.png" imageofLanguage="https://melvynx.com/icons/typescript-rainbow.svg" />
                <ExperiencCard image="https://e7.pngegg.com/pngimages/241/697/png-clipart-netflix-full-logo-tech-companies-thumbnail.png" textforExperien="Netflix Clone" advantage="He take me 3days" advantage2="I build netflix withe nextjs and tailwindcc" imageofLanguage="https://melvynx.com/icons/vercel-rainbow.svg" BrandOfeXPERIENSE="Netflix"/>
            </div>
        </motion.div>
    )
}

export default WorkExperience;