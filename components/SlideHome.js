import {React,useState} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image'
import profilePic from '../public/hero (1).png'
import { UrlFor } from '../lib/sanity';

export default function SlideHome({props}){

return(
   <div className='hidden lg:block'>
    <div className=" container mx-auto px-20 flex items-center  justify-center py-2">
        <div className="w-[200%] h-20  border-gray-600 overflow-hidden relative ">
            <div className="w-[200%] flex items-center h-20 justify-evenly absolute animate  left-0  ">
               {props.map((img,i)=>{
                  return( <div className="flex justify-center items-start w-[18rem] animate" key={i}>
                     {console.log(img)}
                               <img className='object-contain max-h-24' src={UrlFor(img).url()} alt="logo entreprise partenaire"/>
                          </div>)
                       })}

             {props.map((img,i)=>{
                  return( <div className="flex justify-center items-start w-[18rem]" key={i}>
               <img className='object-contain max-h-24' src={UrlFor(img).url()} alt="logo entreprise partenaire"/>

                          </div>)
                       })}
            </div>
        </div>  
   
   </div>
   </div>
);
};

