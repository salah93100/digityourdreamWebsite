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
            <Link href="/mention">MENTION LEGALES</Link>
            <Link href="/cgv">CGV</Link>
            <Link href="/about">à PROPOS</Link>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2">
          <p className="font-semibold">Services</p>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/services">Développement Web</Link>
            <Link href="/services">Compétnence 2</Link>
            <Link href="/services">Webmarketing</Link>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2">
          <p className="font-semibold">Contact</p>
          <div className="flex flex-col gap-2 text-sm">
            <p>51 Rue Victor Hugo ,Montreuil 93100</p>
            <p>contact@digityourdream.fr</p>
            <a>06.51.40.76.49 </a>
          </div>
        </div>
        <div className="flex flex-col items-star gap-4 text-sm">
            <p className="font-semibold">Suivez-nous ?</p>
          <div className="flex flex-row justify-around gap-4 ">
            <Link href="" className="">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </Link>
            <Link href="" className="">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </Link>
            <Link href="" className="">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
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
