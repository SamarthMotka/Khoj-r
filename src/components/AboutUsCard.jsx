'use client'
import React from 'react'

const AboutUsCard = () => {
    return (
        <div className='text-[#757989] bg-white p-10 lg:px-30 py-10 quicksand'>
            <div className='flex flex-col-reverse lg:flex-row mb-6  mx-auto '>
                <div className='md:p-10 lg:p-0 lg:w-[65%]'>
                    <h1 className="text-3xl md:text-5xl text-[#6d567b] text-center lg:text-start my-3">
                        Where it all began.
                    </h1>
                    <p className='text-[#373a40] pt-4 '>ESTD. 2021</p>
                    <h3 className='text-[#373a40 text-xl font-bold mb-3'>Our Story</h3>
                    <p className='text-justify my-2'>Khoj is more than just a brand—it's a journey of discovery. This is a small initiative towards an artistry take on fabrics & wearables. We celebrate the timeless beauty of hand-painted artistry. Our journey began with a simple yet profound desire—to infuse everyday items with the magic of creativity, transforming the ordinary into the extraordinary.</p>
                    <p className='text-justify my-2'>Each piece in our collection is meticulously crafted by skilled artisans, each brushstroke infused with passion and purpose. From intricate table runners that breathe life into dining spaces, our upcycled collection to elegant dupattas and sarees that drape you in artful sophistication, every creation at Khoj is a testament to our commitment to quality and craftsmanship. Rooted in tradition yet inspired by innovation, we seek to bridge the gap between heritage and modernity, offering hand-painted treasures.</p>
                </div>
                <div className='w-[250px] lg:w-[35%] mx-auto px-4'>
                    <img className='flex align-middle justify-center bg-center bg-cover' src='https://res.cloudinary.com/da5crwlqh/image/upload/v1718987726/WhatsApp_Image_2024-06-21_at_21.50.01_89f93a55_ijowkj.jpg'></img>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row'>
                <div className='max-w-[400px] lg:w-full  mx-auto'>
                    <img src='https://res.cloudinary.com/da5crwlqh/image/upload/v1718292427/Khoj/Accessories/Bags/f4dzmjcbfrve0t1immaq.jpg'></img>
                </div>
                <div className='md:px-10 pt-4 text-center ld:px-0 '>
                    <h1 className=' text-3xl md:text-5xl text-[#6d567b] my-3'>Words from the founder</h1>
                    <p className='text-justify my-2'>At the heart of Khoj lies a simple yet profound journey—one fueled by the desire to explore the path of artistry and touch hearts through creativity. What began as a personal quest to chart my own artistic course soon evolved into something greater—an endeavor to transform the ordinary into the extraordinary.</p>
                    <p className='text-justify my-2'>Every stroke of paint on fabric tells a story of innovation and reinvention. It's about seeing beyond the stain on the cloth and envisioning a new canvas waiting to be adorned with vibrant hues and intricate designs. This vision, to breathe new life into the mundane, became the essence of Khoj.
                    </p>
                    <p className='text-justify my-2'>But Khoj is more than just my solo pursuit—it's a collaborative effort, a labor of love shared with my mom. Together, we blend creativity with craftsmanship, curating designs and transforming them into tangible expressions of art. Her wisdom and guidance infuse each creation with a touch of warmth and authenticity, making every piece a testament to our shared vision and passion.</p>
                    <p className='text-justify my-2'>Through Khoj, we invite you to join us on this journey of exploration and discovery. Together, let's celebrate the beauty of art in its many forms and spread joy to hearts near and far. Welcome to Khoj—where every creation is a testament to the power of imagination and the beauty of collaboration.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUsCard