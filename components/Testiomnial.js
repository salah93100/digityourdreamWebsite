import React from "react";
import Slider from "react-slick";
import Image from "next/dist/client/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PhotoTestimonial from '../public/myLevel.png';
import Logotest from '../public/dev.svg'
import {GrNext} from '@react-icons/all-files/gr/GrNext';
import { GrPrevious  } from '@react-icons/all-files/gr/GrPrevious';
import { UrlFor } from "../lib/sanity";
import { motion } from "framer-motion";
const  CustomNextArrow=(props) => {
  const { className, onClick } = props;
  return (
    <div
    className={className}
    onClick={onClick}
   
  >
    
     <GrNext size={40}/>
    </div>
   
  );
}

const  CustomPrevArrow=(props) => {
  const { className, onClick } = props;
  return (
    <div
    className={className}
    onClick={onClick}
   
  >
    
     <GrPrevious size={40}/>
    </div>
   
  );
}


export default function MultiSlider({props}) {
  var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      speed: 1000,
      autoplaySpeed: 1000,
      cssEase: "linear",
      nextArrow: <CustomNextArrow />,
      prevArrow:<CustomPrevArrow />,
      responsive:[{
        breakpoint: 600,
        settings: {
         arrows:false,
         autoplay: true,
         speed: 1000,
      autoplaySpeed: 2000,
      
        }
      }]
  };
  return (
   
 
  <motion.div initial={{opacity:0}} 
  whileInView={{opacity:1}}
  transition={{duration:2}}  className="lg:p-10">
 <Slider {...settings}  >
{props.map((img,i)=>{
 return(  
 <div key={i} className='flex flex-row flex-wrap lg:flex-nowrap lg:my-10 mx-auto items-center justify-center gap-4 p-4 lg:p-10 min-h-full display  flex-forced space-y-4 md:'>
        <div className='flex flex-col lg:max-w-lg hidden md:block'>
        <Image src={UrlFor(img.photo).url()} width={250} height={250} className="" alt="Testimonial Image" />
        </div>
        <div className='flex flex-col max-w-lg p-2'>
           <p className='lg:text-3xl  mb-3 font-semibold'>
           {img.content}
           </p>
           <p className=''>{img.author}</p>
        </div>

      </div>
 

 )
})}
  </Slider>
 </motion.div>

   
  );
}