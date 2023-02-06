import React from 'react'
import { useForm } from "react-hook-form";
import { BiPhoneCall } from '@react-icons/all-files/bi/BiPhoneCall'
import { BiHome } from '@react-icons/all-files/bi/BiHome'
import { HiOutlineMail } from '@react-icons/all-files/hi/HiOutlineMail'



export default function ContactMe({props}) {
    const { register, handleSubmit,formState: {errors}, watch, } = useForm();
    const onSubmit = formData => (
        window.location.href=`mailto:contact@digityourdream.fr?subject=Devis pour ${formData.nameSocial}.&body=Bonjour je m'appelle${""} ${formData.name}. Je voudrais réaliser le projet suivant:${formData.project} .
        `
    )
  return (
    <div className='h-screen flex relative flex-col text-center md:flex-row md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center'>
                <h3 className='absolute uppercase top-16 md:top-12 tracking-[10px] md:tracking-[18px] text-white text-2xl -mr-5'>
                    Contactez-nous
                </h3>
                {console.log(register)}
        <div className='flex flex-col space-y-12 mt-12'>
            
            <div className='space-y-10'>
                  <div className='flex items-center md:space-x-5 justify-center  text-white'>
                      <BiPhoneCall className='h-7 w-7 animate-pulse'/>
                      <a href='tel:0651407649' className='text-2xl '>+33651407649</a>
                  </div>
                  
                  <div className='flex items-center md:space-x-5 justify-center  text-white'>
                      <HiOutlineMail className='h-7 w-7 animate-pulse'/>
                      <a href='mailto:contact@digityourdream.fr' className='text-2xl '>contact@digityourdream.fr</a>
                  </div>

                  <div className='flex items-center md:space-x-5 justify-center  text-white'>
                      <BiHome className='h-7 w-7 animate-pulse'/>
                      <a href='https://www.google.com/maps/dir//51+Rue+Victor+Hugo,+93100+Montreuil/@48.861426,2.4372211,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47e66d5c676561e1:0xc1d147cebe69373c!2m2!1d2.4394098!2d48.8614225?hl=fr' className='text-2xl '>51 rue Victo Hugo 93100 Montreuil</a>
                  </div>
            </div>    
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-fit space-y-2 mx-auto '>
                <div className='flex  space-x-2 '>
                  <div className=''>
                    <input {...register('name',{required:'Votre nom est requis'})} aria-invalid={errors.name ? "true" : "false"} className='contactInput w-full' type="text" placeholder='Nom' />
                   
                    <p className='text-black'>{errors.name?.message}</p>    
                    </div>
                    <div>
                    <input {...register('nameSocial',{required:'Mettre le nom de votre Start-up'})} className='contactInput' type="text" placeholder='Votre start-up'/>
                    <p className='text-black'>{errors.nameSocial?.message}</p>
                    </div>
                </div>
                <input {...register('email',{required:'Votre email est requis',pattern:{ value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i , message:'Email non valide'}  })} className='contactInput' type="email"  placeholder='Email'  />
                <p className='text-black'>{errors.email?.message}</p>
                <textarea {...register('project',{required:'Votre Projet est requis'})} className='contactInput' placeholder='Décrire votre projet en quelques lignes...' />
                <p className='text-black'>{errors.project?.message}</p>
                <button type="submit" className='btn bg-gray-900 text-white font-bold text-lg'>Envoyer</button>
            </form>
        </div>
    </div>
  )
}
