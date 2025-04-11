import React from 'react'
import PaletteIcon from '@mui/icons-material/Palette';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LightModeIcon from '@mui/icons-material/LightMode';

const MindsBehindHome = () => {
  return (
            <div className='bg-white  flex flex-col lg:flex-row  p-10 md:p-20 md:px-30 quicksand'>
                <div className='md:w-[70%] md:h-[50%] lg:w-[30%] md:mx-auto'>
                    <img src='https://res.cloudinary.com/da5crwlqh/image/upload/v1718645082/WhatsApp_Image_2024-06-17_at_18.44.55_53338d31_z2snvc.jpg' ></img>
                </div>
                <div className='lg:w-[70%] lg:ml-12'>
                    <h2 className='text-[#6d567b]  mt-6 lg:mt-0 lg:mb-3 text-4xl font-bold text-center lg:text-start'>Minds behind the venture</h2>
                    <p className='text-[#6c6d76] text-sm py-4 lg:pt-0 text-justify'>From a love of hand-painting to a heartfelt venture, Khoj was born. We're Yashvi and Rajeshri Shah, a mother-daughter duo with a shared passion for art and design. Rajeshri's meticulous eye for detail complements my artistic vision, and together we create beautiful, functional designs. While my MBA background allows me to handle the business side, there's nothing quite like the feeling of putting brush to canvas and letting creativity flow. We invite you to join us on this artistic journey!</p>
                    <div className='text-sm'>
                        <div className='flex flex-row my-3'>
                            <div className='text-[#6d567b] ' ><PaletteIcon fontSize="large"></PaletteIcon></div>
                            <div className='ml-4 md:ml-8'>
                                <h3 className='text-[#6d567b] font-bold text-lg'>Artistry</h3>
                          <p className='text-[#6c6d76] text-sm pt-1 text-justify'>
                                    Yashvi Shah's artistry shines through her intricate hand-painted designs, blending traditional techniques with contemporary elegance. Each piece she creates is a testament to her dedication to quality and artistic expression.</p>
                            </div>
                        </div>
                        <div className='flex flex-row my-3' >
                            <div className='text-[#6d567b]'><VerifiedIcon fontSize="large"></VerifiedIcon></div>
                            <div className='ml-4 md:ml-8'>
                          <h3 className='text-[#6d567b] font-bold text-lg'>Customer satisfaction</h3>
                          <p className='text-[#6c6d76] text-sm pt-1 text-justify'>
                                    Yashvi Shah is dedicated to ensuring customer satisfaction, meticulously crafting each piece to meet the highest standards. Her keen attention to detail and commitment to quality reflect her passion for delighting her customers.</p>
                            </div>
                        </div>
                        <div className='flex flex-row my-3'>
                            <div className='text-[#6d567b]'><LocalMallIcon fontSize="large"></LocalMallIcon></div>
                            <div className='ml-4 md:ml-8'>
                          <h3 className='text-[#6d567b] font-bold text-lg'>Uniqueness</h3>
                          <p className='text-[#6c6d76] text-sm pt-1 text-justify'>
                                    She excels in customization, tailoring each design to meet individual preferences and styles. Her ability to create personalized, hand-painted pieces ensures every customer receives a unique and cherished item.</p>
                            </div>
                        </div>
                        <div className='flex flex-row my-3'>
                            <div className='text-[#6d567b]'> <LightModeIcon fontSize="large"></LightModeIcon></div>
                            <div className='ml-4 md:ml-8'>
                          <h3 className='text-[#6d567b]  font-bold text-lg'>High Quality Fabrics</h3>
                          <p className='text-[#6c6d76] text-md pt-1 text-justify'>
                                    She delivers high-quality fabrics, ensuring each piece is both luxurious and durable. Her commitment to using premium materials guarantees exceptional comfort and lasting beauty in every creation.</p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

  )
}

export default MindsBehindHome