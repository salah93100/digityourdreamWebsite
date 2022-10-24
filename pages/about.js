import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Aboutcompoment from '../components/Aboutcompoment'

export default function about() {
  return (
    <div className="backgroundWebsite ">
    <Navbar/>
    <section className='snap-start'>
     <Aboutcompoment/>
    </section>
    <Footer/>
    </div>
  )
}
