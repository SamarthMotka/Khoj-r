import React from 'react'
import PathCard from './PathCard'
import ContactUsCards from './ContactUsCards'
import FAQ from './FAQ'

const Contact = () => {
  return (
    <>
    <PathCard heading={'Contact Us'} img={'https://res.cloudinary.com/da5crwlqh/image/upload/v1718627166/WhatsApp_Image_2024-06-14_at_20.01.25_d11dac9f_oev1cd.jpg'} link={'contact-us'} linkName={'Contact Us'} ></PathCard>
    <ContactUsCards></ContactUsCards>
    <FAQ></FAQ>
    </>
  )
}

export default Contact