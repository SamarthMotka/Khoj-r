import React from 'react'
import PathCard from './PathCard'
import AboutUsCard from './AboutUsCard'
import AboutUsStats from './AboutUsStats'
import Testimonials from './Testimonials'

const AboutUs = () => {
    return (
        <>
            <PathCard heading={'About Us'} img={"https://res.cloudinary.com/da5crwlqh/image/upload/v1718292677/Khoj/Wearables/WeddingCollection/oetypfpr6lgnxqizsyw7.jpg"} link={'about'} linkName={'About Us'}></PathCard>
            <AboutUsCard></AboutUsCard>
            <AboutUsStats></AboutUsStats>
            <Testimonials></Testimonials>


        </>
    )
}

export default AboutUs