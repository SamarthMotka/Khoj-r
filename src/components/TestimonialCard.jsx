import React from 'react'
import { Rating } from '@mui/material';

const TestimonialCard = ({ name, designation, review }) => {
    return (

        <div className='mx-auto bg-white flex flex-col md:flex-row lg:flex-row xl:flex-row max-w-[600px] h-[350px] md:max-h-[200px]' >
            <div className='p-4 mx-auto lg:mx-0'>
                <img className='border-[4px] border-[#666666] rounded-[50%]  max-w-[50px] md:max-w-[90px]' src="https://res.cloudinary.com/da5crwlqh/image/upload/v1718291968/Khoj/de5db1gmseithwvrmso7.png"></img>
            </div>
            <div className='text-[#686D76] p-4 max-w-[500px] text-center '>
                <h3 className='text-center md:text-start'>{name}</h3>
                <h5 className='text-xs text-center md:text-start'>{designation}</h5>
                <p className='mt-2 text-center md:text-start'><Rating name="half-rating-read" defaultValue={5} readOnly /></p>
                <p className='italic indent-4'>{review}</p>
            </div>
        </div>
    )
}

export default TestimonialCard