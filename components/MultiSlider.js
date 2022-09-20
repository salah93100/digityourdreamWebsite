import React from "react";
import Slider from "react-slick";
import Image from "next/dist/client/image";
import ItemsSlide from "./ItemsSlide";

export default function MultiSlider({props}) {
  var settings = {
      dots: true,
      centerMode: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 1000,
      cssEase: "linear",
     

  };
  return (
    <div className="carroussel">
    <Slider {...settings}  >
  
{props.map((img,i)=>{
 return( <ItemsSlide key={i}><Image src={img.url} width={250} height={250} alt=""/></ItemsSlide>)
})}
    </Slider>
    </div>
  );
}