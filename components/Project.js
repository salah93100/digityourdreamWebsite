import React from 'react'
import image1 from '../public/myLevel.png'
import {motion} from "framer-motion"
import { Cursor } from 'react-simple-typewriter'
export default function Project() {
    const ProjectItems=[1,2,3,4]
  return (
    <motion.div
    initial={{opacity:0}} 
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-[calc(100vh+10.5rem)] relative flex overflow-hidden flex-col text-center md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute uppercase top-24 tracking-[20px] text-white text-2xl -mr-5'>Réalisation</h3>
      
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 md:mt-10 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
               {ProjectItems.map((project,i)=>(
                <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-5 md:p-44 h-screen'>
                    <motion.img 
                     initial={{y:-300,
                     opacity:0,
                     }} 
                     whileInView={{opacity:1 ,y:0}}
                     transition={{duration:1.2}}
                     viewport={{once:true}}
                     src='https://zupimages.net/up/22/42/n7vj.png' alt='' />

                    <div className='text-white'><h4 className='text-4xl font-semibold text-center '> <span className='underline '>Le cas détude numéro  {i+1} sur {Object.keys(ProjectItems).length} </span> name Project</h4>
                    <p className='text-lg text-center md:text-left max-w-2xl leading-9'>Nous avons réaliser X et Machin chouette
                    Nous avons réaliser X et Machin chouette
                    Nous avons réaliser X et Machin chouette
                    Nous avons réaliser X et Machin chouette
                    Nous avons réaliser X et Machin chouette
                    </p>
                    </div>
                </div>
            ))}
            </div>

     
        <div className='w-full absolute top-[30%] bg-slate-400/10 left-0 h-[500px] -skew-y-12' />
        <Cursor cursorColor='#F7AB0A'/>
    </motion.div>
  )
}
