import {React,useState,useEffect} from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import { BiPhoneCall } from '@react-icons/all-files/Bi/BiPhoneCall';
import { sanityClient } from '../lib/sanity';
import { AiOutlineCheckCircle } from '@react-icons/all-files/ai/AiOutlineCheckCircle';





export default function FormTel() {
   const [valueTel,setValueTel] =useState({})
   const [disabledSubmit,setDisabledSubmit] = useState(false)
   const [formErrors,setFormErrors] = useState({})
   const [formSent,setFormSent] = useState(false)
   const [submit,setSubmit] = useState(false)
  

   const validate=(values)=>{
    const errors = {};
   if ( values.phoneNumber?.length===0 ||values.phoneNumber?.length<4 ||Object.keys(valueTel).length===0 ){
    errors.phonenumber="Le numéro de téléphone ne doit pas être vide";
   }
   return{ errors,
   valid: Object.keys(errors).length < 1}
   }

   async function submitPhoneNumberData(){ 
    const res = await fetch('/api/handlePhoneNumber',{
    method:"POST",
    body: JSON.stringify({phoneNumberData:valueTel.phoneNumber}),
    }).catch((error)=> console.log(error));

   const data = await res.json()
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
     setSubmit(true);
    const {errors , valid } = validate(valueTel);
  if(!valid){
    setFormErrors(errors);
    setSubmit(false);
  }else{
    setFormSent(true);
    submitPhoneNumberData();
    setSubmit(false);
    setFormErrors({});
  }
  
    }


  
    const handlePhoneNumber=(phone)=>{
        setValueTel({phoneNumber:`${phone}`})
    
    }    

  
  
  return (
    <div className="w-full">
    <form className="w-full max-w-sm lg:max-w-lg px-3 lg:px-0" onSubmit={handleSubmit}>
   
    
    <div className="flex items-center ">
    {!formSent ?(
   
        <>
         <PhoneInput
                containerClass="shadow-xl flex flex-wrap "
                inputClass=""
                buttonClass=""
                country={"fr"}
                placeholder="Entre votre numéro de tel ..."
                value={valueTel.phoneNumber}
                onChange={(phone) => handlePhoneNumber(phone)}
                inputProps={{
                    name: 'phone',
                    required: true,
                    autoFocus: true
                  }}
                />
                { formErrors?.phonenumber && (
                  <span className='absolute text-slate-800 text-sm mt-24'>
                    {formErrors?.phonenumber}
                  </span>
                )}
       
  <div>
      <button
        className="flex items-center lg:flex-row py-3  px-2 lg:py-3.5 lg:px-6 shadow-xl ml-1 rounded-r-md transition duration-300 bg-neutral-800	 text-white "
        type="submit"
        value="Submit"
        disabled={disabledSubmit}
      >
        <BiPhoneCall className='lg:hidden' size={30}/>
       <span className='hidden lg:block'> Devis Maintenant</span>
      </button>
      </div>
      </> ):(
         <div className="w-full h-full flex items-center  p-2 md:p-5 bg-blue-600 rounded-md border border-1 border-white align-i gap-2 md:gap-4">
         <AiOutlineCheckCircle color='white' size={50}/>
         <p className="text-start text-white text-sm">
           Votre message a bien été envoyé. Nous vous recontacterons dans
           les plus brefs délais.
         </p>
       </div>
      )}
      </div>
    </form>
  </div>

  )
}
