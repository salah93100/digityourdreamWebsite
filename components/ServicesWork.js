import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import logoDev from "../public/dev.svg";
import { BiCodeBlock } from "@react-icons/all-files/bi/BiCodeBlock";

export default function ServicesWork() {
    const services=[1,2,3,4]
  return (
    <motion.div
    initial={{opacity:0}} 
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-[calc(100vh+10.5rem)] relative flex overflow-hidden flex-col text-center md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
                <h3 className='absolute uppercase top-24 tracking-[20px] text-white text-2xl -mr-5'>Nos services</h3>
                <motion.div 
                 initial={{opacity:0}} 
                 whileInView={{opacity:1}}
                 transition={{duration:1.5}}
                 className="container mx-auto grid grid-cols-1 md:grid-cols-4 justify-start  xl:justify-center   ">
                    {services.map((service,i)=>(
                     <div key={i} className="flex flex-col  lg:mx-5 lg:py-6 max-w-sm box-border overflow-hidden shadow-lg  ">
                
                     <div className='border-white border-2 rounded-full p-5 flex justify-center	my-5 mx-auto'>
                         
                     <BiCodeBlock size={35} color="rgb(38 38 38)"/>
                   </div>
                   <div className='px-6 py-4 space-y-4'>
                     <h2 className='text-2xl text-white font-semibold px-5'>Web <span className='text-neutral-800'>Développement</span></h2>
                     <p className='text-white text-center mt-3'>Soyez visible à chaque étape du parcours utilisateur de vos
                     prospects et transformez-les en nouveaux clients. Une stratégie
                     en référencement naturel adaptée à vos objectifs Business.</p>
                   </div>
                   
     
                         </div>
                    ))}
               
                    
                    </motion.div>

    </motion.div>
  )
}
