import React from 'react'
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const ContactUsCards = () => {
    return (
        <div className='bg-white text-[#373a40] quicksand'>
            <div className='flex flex-col text-sm pt-10 md:flex-row justify-around px-10  mb-4'>
                <div className='text-center '>
                    <LocationOnIcon fontSize='large' className=' m-4'></LocationOnIcon>
                    <h3 className='font-bold text-[#6d567b]'>Address</h3>
                    <Link className='hover:text-[#6d567b] cursor-pointer' href='https://maps.app.goo.gl/k681xW5EfyhkUBpEA'>12, Shaurya Avenue, Near city civic centre, Vasna - Ahmedabad 380007
                    </Link>
                </div>
                <div className='text-center'>
                    <CallIcon fontSize='large' className=' m-4' ></CallIcon>
                    <h3 className='font-bold text-[#6d567b]'>Call Us</h3>
                    <Link className='hover:text-[#6d567b] cursor-pointer' href="tel:+918320968029">+91 8320968029</Link>
                </div>
                <div className='text-center'>
                    <EmailIcon fontSize='large' className=' m-4'></EmailIcon>
                    <h3 className='font-bold text-[#6d567b]'>Email Us</h3>
                    <Link className='hover:text-[#6d567b] cursor-pointer' href="mailto:khojbyys@gmail.com">khojbyys@gmail.com</Link>
                </div>

            </div>

            <div className='lg:text-sm p-10 lg:px-30'>
                <div className='flex flex-col lg:flex-row  justify-center'>
                    <div className='lg:w-2/4'>
                        <iframe className='h-[400px] lg:h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.0162625808335!2d72.550108!3d23.0043102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e851985f7777b%3A0xa0bb83a5cbe75c0a!2sCity%20Civic%20Center%2C%20Vasna!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" frameBorder="0" style={{ border: `0`, width: `100%` }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className='lg:w-2/4 bg-[#c3b6cb] p-10'>
                        <form className=''>
                            <div className="flex flex-col md:flex-row gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="placeholder-[#202020] w-full md:w-1/2 p-3 bg-[#e8d9e8] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9a7fa3]"
                                />
                                <input
                                    type="text"
                                    placeholder="Your phone number"
                                    className="placeholder-[#202020] w-full md:w-1/2 p-3 bg-[#e8d9e8] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9a7fa3]"
                                />
                            </div>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="placeholder-[#202020] w-full p-3 bg-[#e8d9e8] border border-gray-300  mt-4 focus:outline-none focus:ring-2 focus:ring-[#9a7fa3]"
                            />

                            <input
                                type="text"
                                placeholder="Subject"
                                className="placeholder-[#202020] w-full p-3 bg-[#e8d9e8] border border-gray-300  mt-4 focus:outline-none focus:ring-2 focus:ring-[#9a7fa3]"
                            />
                            <textarea
                                placeholder="Message"
                                rows="5"
                                className="placeholder-[#202020] w-full p-3 bg-[#e8d9e8] border border-gray-300  mt-4 focus:outline-none focus:ring-2 focus:ring-[#9a7fa3]"
                            ></textarea>

                            <div className='flex justify-center align-middle'>
                                <button
                                    type="submit"
                                    className="mx-auto w-full md:w-1/4 bg-[#715776] text-white py-3 rounded-md mt-6 hover:bg-[#5d4863] transition"
                                >
                                    Send Message
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ContactUsCards;