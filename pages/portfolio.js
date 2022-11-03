import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Project from '../components/Project'
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

export default function portfolio({recipies}) {
  return (
    <div className="backgroundWebsite ">
    <Navbar/>
    <section className='snap-start '>
      {console.log(recipies)}
       <Project props={recipies}/> 
    </section>
    <Footer/>
    </div>
  )
}
