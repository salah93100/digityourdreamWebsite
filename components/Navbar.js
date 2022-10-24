import { useState,useE,React } from 'react'
import Image from 'next/image'
import Link from "next/link";
import profilePic from '../public/logoWebsite.svg';
import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu';
import { MdClose } from '@react-icons/all-files/md/MdClose';



export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className=" w-full fixed lg:relative z-50 mb-8 top-0 h-20 sticky">
     
        <nav className="w-full fixed lg:relative  navbg lg:px-4 lg:p-1 items-center flex flex-row flex-wrap lg:justify-around justify-between">
        <div className="w-full flex flex-row flex-wrap items-center justify-between lg:justify-around relative ">
          
            <div className='flex mx-3 lg:mx-0'>
         
         <Link href="/"><a> <Image src={profilePic}  className="h-10 inline cursor-pointer " alt='Digityourdream'/> </a></Link> 
           </div>
        
           <button className='flex  lg:hidden text-white'
            onClick={ () => setMenuOpen(!menuOpen)}> 
            {menuOpen===false ?( 
            <GiHamburgerMenu size={30}/>
            ):
             (<MdClose size={30}/>)
          }
       
            </button>
           <div className='navbg absolute lg:relative  w-[70%] lg:w-[unset] max-w-xs lg:max-w-full top-[100%] lg:top-[unset] left-0'>
            <ul className={'lg:flex-row lg:flex p-4 flex-col uppercase items-start lg:items-center gap-6 lg:gap-8' +(menuOpen ? " flex  h-[calc(100vh-3.75rem)]  lg:h-[unset]" : " hidden")}>
              <li className='w-full lg:w-[fit-content] p-2 py-2 lg:p-0 lg:py-0 border-b-2 lg:border-0'>  <Link href={"/"}><a className=' text-md text-white py-7 px-3 lg:inline-block hover:underline underline-offset-8'>Acceuil</a></Link></li>
            <li className='w-full lg:w-[fit-content] p-2 py-2  lg:p-0  lg:py-0 border-b-2 lg:border-0'>  <Link href={"/services"}><a className='text-md text-white py-7 px-3 lg:inline-block hover:underline underline-offset-8'>Services</a></Link></li>
            <li className='w-full lg:w-[fit-content] p-2 py-2  lg:p-0 lg:py-0 border-b-2 lg:border-0'>  <Link href="/portfolio"><a className='  text-md text-white py-7 px-3 lg:inline-block hover:underline underline-offset-8'>Réalisation</a></Link></li>
            <li className='w-full lg:w-[fit-content] p-2 py-2 lg:p-0  lg:py-0 border-b-2 lg:border-0'>   <Link href={"/about"}><a className=' ltext-md  text-white py-7 px-3 lg:inline-block hover:underline underline-offset-8'>A propos</a></Link></li>

            </ul>
           
       
            </div>
            <div className='flex'>

            </div>
            <div className='lg:block hidden'>
           <button className='btn-blue text-white px-6 py-3 rounded-md image-clignote hover:text-blue-600 hover:bg-white' >Contactez-nous</button>
           </div>
         
           </div> 
        </nav>
      
    </div>
  )
}
