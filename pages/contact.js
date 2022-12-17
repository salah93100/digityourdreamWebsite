import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactMe from '../components/ContactMe'
import  {sanityClient}  from "../lib/sanity"

const recipesQuery=`*[_type== "project"]{
    name,
    photo,
    text
  }`

export async function getServerSideProps() {
    // Fetch data from external API
    const recipies = await sanityClient.fetch(recipesQuery)
  
    // Pass data to the page via props
    return { props: { recipies } };
  }
  

export default function contact() {
  return (
    <div className="backgroundWebsite ">
    <Navbar/>
    <section className='snap-start'>
    <ContactMe/>
    </section>
    <Footer/>
    </div>
  )
}
