import { useState,React } from 'react'
import Image from 'next/image'
import Link from "next/link";
import profilePic from '../public/logoWebsite.svg';
export default function Navbar() {
 
  return (
    <>
        <nav className="p-5 items-center flex flex-row justify-around">
            <div className=''>
         
           <Image src={profilePic} className="h-10 inline cursor-pointer" alt='Digityourdream' />
           </div>
           <div className=''>
            <ul className='md:flex hidden uppercase items-center gap-8'>
              <li>  <Link href={"/"}><a className='text-xl text-white py-7 px-3 inline-block'>Acceuil</a></Link></li>
              <li> <Link href={"/"}><a className='text-xl text-white py-7 px-3 inline-block'>Solutions</a></Link></li>
            <li>  <Link href={"/"}><a className='text-xl text-white py-7 px-3 inline-block'>Services</a></Link></li>
            <li>  <Link href={"/"}><a className='text-xl text-white py-7 px-3 inline-block'>Réalisation</a></Link></li>
            <li>   <Link href={"/"}><a className='text-xl  text-white py-7 px-3 inline-block'>A propos</a></Link></li>

            </ul>
            
             
            </div>
            <div className='md:block hidden'>
           <button className='btn-blue text-white px-6 py-3 rounded-full'>Contactez-nous</button>
           </div>
         
        </nav>
    </>
  )
}
