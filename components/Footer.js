import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faLinkedin,
    faInstagram,
  } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-stone-900	">
    <div className="container mx-auto p-5 mb-5">
      <div className="flex flex-col lg:flex-row items-start justify-evenly p-0 text-white py-8 space-y-4 lg:space-y-0 ">
        <div className="flex flex-col items-start gap-2">
          <p className="font-semibold">Informations légales</p>
          <div className="flex flex-col gap-2 text-sm">
           <p>siret: 919 820 605 00013</p>
            <Link href="/about">à PROPOS</Link>
          </div>
        </div>
        
        <div className="flex flex-col items-start gap-2">
          <p className="font-semibold">Contact</p>
          <div className="flex flex-col gap-2 text-sm">
            <a href='https://www.google.com/maps/dir//51+Rue+Victor+Hugo,+93100+Montreuil/@48.861426,2.4372211,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47e66d5c676561e1:0xc1d147cebe69373c!2m2!1d2.4394098!2d48.8614225?hl=fr'>51 Rue Victor Hugo ,Montreuil 93100</a>
            <a href='mailto:contact@digityourdream.fr'>contact@digityourdream.fr</a>
            <a href='tel:0651407649'>06.51.40.76.49 </a>
          </div>
        </div>
        <div className="flex flex-col items-star gap-4 text-sm">
            <p className="font-semibold">Suivez-nous ?</p>
          <div className="flex flex-row justify-around gap-4 ">
            <Link href="https://www.facebook.com/profile.php?id=100083030573971">
              <FontAwesomeIcon icon={faFacebook} size="2x" className="cursor-pointer" />
            </Link>
            <Link href="https://www.linkedin.com/company/digit-your-dream/" >
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="cursor-pointer"/>
            </Link>
            <Link href="https://www.instagram.com/digityourdream/?hl=fr">
              <FontAwesomeIcon icon={faInstagram} size="2x" className="cursor-pointer"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-zinc-800">
      <p className="text-white text-center text-xs p-2">
        {" "}
        2022 Copyright© -Digityourdream.fr
      </p>
    </div>
  </footer>
  )
}
