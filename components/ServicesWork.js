import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import logoDev from "../public/dev.svg";
import { BiCodeBlock } from "@react-icons/all-files/bi/BiCodeBlock";
import { UrlFor } from '../lib/sanity';




export default function ServicesWork({props}) {
  return (
    <motion.div
    initial={{opacity:0}} 
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='md:h-[calc(100vh+10.5rem)] my-5 relative flex overflow-hidden flex-col text-center md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
                <h1 className='absolute uppercase top-24 md:top-32 tracking-[20px] text-white text-2xl '>Nos services</h1>

                <motion.div 
                 initial={{opacity:0}} 
                 whileInView={{opacity:1}}
                 transition={{duration:1.5}}
                 className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-start  xl:justify-center mb-24 gap-8 md:gap-16 xl:gap-2 mt-52 md:mt-64">
                    {props.map((service,i)=>(
                     <div key={i} className="rounded-sm flex flex-col mx-9 md:mx-3 lg:mx-5 lg:py-6 max-w-sm box-border overflow-hidden shadow-xl border border-[#EEEEEE] border-1 bg-[#f7f7ff] ">
                     <div className=' p-2  flex justify-center	my-2 '>
                         
                  <Image src={UrlFor(service.photo).url()} width={35} height={34} alt="{data.name}" className='after' />
                  
                            </div>
                   <div className='p-4 space-y-4'>
                     <h2 className='text-2xl text-black font-semibold px-5'>{service.name} </h2>
                     <p className='text-neutral-500 text-center mt-3 leading-10'>{service.textdescription}</p>
                   </div>
                   
     
                         </div>
                    ))}
               
                    
                    </motion.div>

    </motion.div>
  )
}
