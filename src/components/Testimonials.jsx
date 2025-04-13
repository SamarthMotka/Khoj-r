import React from 'react'
import TestimonialCard from './TestimonialCard';
import { useState, useEffect } from 'react';


const testimonial = [
    {
        name: 'Shefali Gaur',
        designation: "Marketing Professional",
        review: "Got the bags...they look awesome... beautifully and neatly done 👏. Sometimes while ordering online, we get skeptical about delivery and quality, but with Khoj you don't need to worry about anything."
    },
    {
        name: "Priya Desai",
        designation: "Designer",
        review: "Loved their work and how well they understand the concept of customization.",
    }
];

const Testimonials = () => {


    const [currIndex, setCurrIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false); // Default to false to avoid server-side issues

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth < 1024);
        }

        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (isMobile) {
            const interval = setInterval(() => {
                setCurrIndex((prevIndex) => (prevIndex + 1) % testimonial.length);
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [isMobile]);

    return (
        <div className='bg-white p-12 lg:px-10 quicksand'>
            <div className='text-center mb-10'>
                <h1 className=' text-3xl md:text-5xl pb-4 text-[#6d567b]'>Testimonials</h1>
                <p className='text-[#686D76]'>Hear what our delighted customers have to say about us</p>
            </div>

            {/* For larger screens */}
            <div className='hidden lg:grid grid-cols-2 gap-6 pb-10'>
                {testimonial.map((data, index) => (
                    <TestimonialCard
                        key={index}
                        name={data.name}
                        designation={data.designation}
                        review={data.review}
                    />
                ))}
            </div>

            {/* For mobile screens */}
            <div className='lg:hidden relative'>
                <TestimonialCard
                    name={testimonial[currIndex].name}
                    designation={testimonial[currIndex].designation}
                    review={testimonial[currIndex].review}
                />
            </div>
        </div>
    );
};


export default Testimonials