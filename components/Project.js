import React from 'react'
import image1 from '../public/myLevel.png'
import {motion} from "framer-motion"
import { UrlFor } from '../lib/sanity'
export default function Project({props}) {
    const ProjectItems=[1,2,3,4]
  return (
    <motion.div
    initial={{opacity:0}} 
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-[calc(100vh)] md:h-[calc(100vh+10.5rem)] relative flex overflow-hidden flex-col text-center md:flex-row max-w-full justify-evenly mx-auto items-center z-0 my-5'>
        <h3 className='absolute uppercase top-24 tracking-[10px] md:tracking-[20px] text-white text-2xl -mr-5'>Réalisation</h3>
      
            <div className='relative w-full flex overflow-x-scroll  overflow-y-hidden snap-x snap-mandatory z-20 md:px-24 md:mt-10 md:mx-10 scrollbar scrollbar-track-gray-500/20 scrollbar-thumb-[#F2F2F2]/80'>
               {props.map((project,i)=>(
                <div key={i}
                className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-3 md:p-44 h-screen'>
                    <motion.img 
                     initial={{y:-300,
                     opacity:0,
                     }} 
                     whileInView={{opacity:1 ,y:0}}
                     transition={{duration:1.2}}
                     viewport={{once:true}}
                     src={UrlFor(project.photo).url()} 
                     width={500}
                     height={500}
                     alt='' />
                    <div className='text-white '>
                      <h4 className='text-4xl font-semibold text-center md:text-start '> <span className='underline '>Projet numéro {i+1} sur {Object.keys(props).length} :</span> {project.name}</h4>
                    <p className='text-lg text-center md:text-left max-w-2xl leading-8 md:leading-9 md:mb-10 md:mt-4'>Nous avons réaliser X et Machin chouette
                    {project.text}
                    </p>
                    </div>
                </div>
            ))}
            </div>

     
        <div className='w-full absolute top-[30%] bg-slate-400/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}
