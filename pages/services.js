import React from 'react'
import ServicesWork from '../components/ServicesWork'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function services() {
  return (
    <div className="backgroundWebsite ">
    <Navbar/>
    <section className='snap-start'>
     <ServicesWork/>
    </section>
    <Footer/>
    </div>
  )
}
