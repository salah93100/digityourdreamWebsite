import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Project from '../components/Project'
export default function portfolio() {
  return (
    <div className="backgroundWebsite ">
    <Navbar/>
    <section className='snap-start '>
       <Project/> 
    </section>
    <Footer/>
    </div>
  )
}
