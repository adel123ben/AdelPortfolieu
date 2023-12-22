"use client";

import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {motion} from "framer-motion"

export default function NewSkill() {
  return (
    <>
      <main className="w-full py-12 md:py-24 lg:py-32 h-screen flex items-center">
        <div className="container grid gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold  text-gray-500  sm:text-4xl md:text-5xl tracking-[15px] uppercase"> Skills</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We specialize in the following areas.
            </p>
          </div>
          <motion.div 
          initial={{
            x: -200,
            opacity: 0
          }}
          whileInView={{
            x: 0,
            opacity: 1

          }}

          transition={{
            duration: 1.5
          }}
          className="grid w-full grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="mx-auto border-0 shadow-lg bg-[#f7ab01] cursor-pointer flex w-full items-center justify-center">
              <CardHeader>
                <h3 className="text-md font-bold ">Front-end</h3>
              </CardHeader>
              <CardContent className=""> 
                
                <Button className="text-gray-500 flex flex-row items-center space-x-2 gap-2" size="sm" variant="ghost">
                <img src="https://melvynx.com/icons/typescript-rainbow.svg" alt="" />
                    Typscript senior
                </Button>
                <Button className="text-gray-500 flex flex-row items-center space-x-2 gap-2" size="sm" variant="ghost">
                <img src="https://melvynx.com/icons/react-rainbow.svg" alt="" />
                react senior
                </Button>
              </CardContent>
            </Card>
            <Card className="mx-auto border-0 shadow-lg bg-[#f7ab01] cursor-pointer flex w-full items-center justify-center">
              <CardHeader>
                <h3 className="text-md font-bold">Design</h3>
              </CardHeader>
              <CardContent>
              <Button className="text-gray-500 flex flex-row items-center space-x-2 gap-2" size="sm" variant="ghost">
                <img src="https://melvynx.com/icons/figma-rainbow.svg" alt="" />
                figma senior
                </Button>
                <Button className="text-gray-500 flex flex-row items-center space-x-2 gap-2" size="sm" variant="ghost">
                <img className="h-5" src="/tail.png" alt="" />
                tailwind senior
                </Button>
              </CardContent>
            </Card>
            <Card className="mx-auto border-0 shadow-lg bg-[#f7ab01] cursor-pointer flex w-full items-center justify-center">
              <CardHeader>
                <h3 className="text-md font-bold">Other</h3>
              </CardHeader>
              <CardContent>
              <Button className="text-gray-500 flex flex-row items-center space-x-2 gap-2" size="sm" variant="ghost">
                <img className="h-5" src="/git.png" alt="" />
                git & github

                </Button>
                <Button className="text-gray-500 flex flex-row items-center space-x-2 gap-2" size="sm" variant="ghost">
                <img className="h-5" src="https://melvynx.com/icons/vercel-rainbow.svg" alt="" />
                vercel
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </>
  )
}