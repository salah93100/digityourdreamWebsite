import React from 'react'
import ServicesWork from '../components/ServicesWork'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import  {sanityClient}  from "../lib/sanity"
import { isPortableTextToolkitSpan } from '@portabletext/toolkit'

const recipesQuery=`*[_type== "services"]{
  photo,
  name,
  textdescription,
  namefwbold
  
}`
export async function getServerSideProps() {
  // Fetch data from external API
  const recipies = await sanityClient.fetch(recipesQuery)

  // Pass data to the page via props
  return { props: { recipies } };
}

export default function services({ recipies }) {
  return (
    <div className="backgroundWebsite ">
    <Navbar/>
    <section className='snap-start'>
     <ServicesWork props={recipies}/>
    </section>
    <Footer/>
    </div>
  )
}
