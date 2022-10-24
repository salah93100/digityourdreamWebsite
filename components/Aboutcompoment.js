import React from 'react'
import {motion} from "framer-motion"

export default function Aboutcompoment() {
  return (
    <motion.div
    initial={{opacity:0}} 
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='focus:center flex flex-col relative h-[calc(100vh+19.5rem)] text-center md:text-left md:flex-row max-w-7xl px-10
     justify-evenly mx-auto items-center'>
        <h3 className='absolute uppercase top-24 tracking-[20px] text-white text-2xl -mr-5'>A propos</h3>   
       
        <motion.img
          initial={{x:-200, opacity:0}} 
          transition={{duration:1.2,}}
          whileInView={{opacity:1,x:0}}
          viewport={{once:true}}
          src='https://zupimages.net/up/22/42/bgt2.jpg'
          className='-mb-32 md:mt-10 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96
           xl:w-[500px] xl:h-[600px] '   autofocus/>
        <div className='-mb-40 space-y-10 px-0 md:px-10 '   >
            <h4 className='text-5xl font-semibold text-white'>Here is a 
            <span className='underline decoration-[#FCFCFC]/50'>background</span>
            </h4>
            <p className='text-white text-base'>Soyez visible à chaque étape du parcours utilisateur de vos prospects et transformez-les en nouveaux clients.

Une stratégie en référencement naturel adaptée à vos objectifs Business permettra un fort développement de votre business.

Concernant tous les aspects techniques : rassurez-vous notre équipe s’en chargera !
Soyez visible à chaque étape du parcours utilisateur de vos prospects et transformez-les en nouveaux clients.

Une stratégie en référencement naturel adaptée à vos objectifs Business permettra un fort développement de votre business.

Concernant tous les aspects techniques : rassurez-vous notre équipe s’en chargera !</p>
        </div>
    </motion.div>
  )
}
