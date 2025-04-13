import React from 'react'

const CustomizationForm = () => {
  return (
            <div className='bg-white  p-4 md:p-10 text-xs quicksand'>
                <div className='lg:w-2/3 bg-[#c3b6cb] p-10 mx-auto text-black'>
                    <form className=''>
                        <div className="flex flex-col md:flex-row md:gap-4">
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
                  <div className='flex flex-col md:flex-row  md:gap-4'>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="placeholder-[#202020] w-full  md:w-1/2 p-3 bg-[#e8d9e8] border border-gray-300  mt-4 focus:outline-none focus:ring-2 focus:ring-[#9a7fa3]"
                            /><input
                                type="text"
                                placeholder="Product Information"
                                className="placeholder-[#202020] w-full  md:w-1/2 p-3 bg-[#e8d9e8] border border-gray-300  mt-4 focus:outline-none focus:ring-2 focus:ring-[#9a7fa3]"
                            />
                        </div>

                  <div className='flex flex-col md:flex-row  md:gap-4'>
                            <input
                                type="number"
                                placeholder="Quantity Required"
                                className="placeholder-[#202020] w-full  md:w-1/2 p-3 bg-[#e8d9e8] border border-gray-300  mt-4 focus:outline-none focus:ring-2 focus:ring-[#9a7fa3]"
                            /><input
                                type="text"
                                placeholder="Enter Preferred size"
                                className="placeholder-[#202020] w-full  md:w-1/2 p-3 bg-[#e8d9e8] border border-gray-300  mt-4 focus:outline-none focus:ring-2 focus:ring-[#9a7fa3]"
                            />
                        </div>

                        <input
                            type="text"
                            placeholder="Enter Preferred designs or any color preferences"
                            className="placeholder-[#202020] w-full p-3 bg-[#e8d9e8] border border-gray-300  mt-4 focus:outline-none focus:ring-2 focus:ring-[#9a7fa3]"
                        />
                        <textarea
                            placeholder="Any Specific Request"
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
        )
    }

export default CustomizationForm