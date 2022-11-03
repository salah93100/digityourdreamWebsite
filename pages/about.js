import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Aboutcompoment from '../components/Aboutcompoment'
import  {sanityClient,UrlFor}  from "../lib/sanity"


const recipesQuery=`*[_type== "aboutpage"]`
export async function getServerSideProps() {
  // Fetch data from external API
  const recipies = await sanityClient.fetch(recipesQuery)

  // Pass data to the page via props
  return { props: { recipies } };
}

export default function about({ recipies }) {
  return (
    <div className="backgroundWebsite ">
    <Navbar/>
    <section className='snap-start'>
     <Aboutcompoment props={recipies}/>
    </section>
    <Footer/>
    </div>
  )
}
