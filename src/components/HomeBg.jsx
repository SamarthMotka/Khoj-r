import React from 'react'

const HomeBg = () => {
    return (

        <div className='bg-white  text-[#6c6d76] quicksand'>
            <div className='h-[100vh]  bg-[url(https://res.cloudinary.com/da5crwlqh/image/upload/v1718292850/Khoj/u5trwlfwptdy4jxl1ecx.jpg)] bg-cover bg-no-repeat bg-center'>

            </div>
            <h1 className='text-[#6d567b] my-4 text-center text-[2.5rem] md:text-[4rem] font-light'>Welcome To Khoj</h1>
            <div className='flex flex-col  lg:flex-row lg:pl-[200px]'>
                <div  >
                    <img className=' mx-auto w-[40%] md:w-[20%] lg:w-[100%] ' src="https://res.cloudinary.com/da5crwlqh/image/upload/v1718987726/WhatsApp_Image_2024-06-21_at_21.50.01_89f93a55_ijowkj.jpg"></img>
                </div>
                <div className='pr-30 text-justify'>
                    <p className='m-3' >Khoj is more than just a brand—it's a journey of discovery. This is a small initiative towards an artistry take on fabrics & wearables.</p>
                    <p className='m-3' >We celebrate the timeless beauty of hand-painted artistry. Our journey began with a simple yet profound desire—to infuse everyday items with the magic of creativity, transforming the ordinary into the extraordinary.</p>
                    <p className='m-3' >Each piece in our collection is meticulously crafted by skilled artisans, each brushstroke infused with passion and purpose. From intricate table runners that breathe life into dining spaces, our upcycled collection to elegant dupattas and sarees that drape you in artful sophistication, every creation at Khoj is a testament to our commitment to quality and craftsmanship.</p>
                    <p className='m-3' >Rooted in tradition yet inspired by innovation, we seek to bridge the gap between heritage and modernity, offering hand-painted treasures.</p>
                </div>
            </div>
            <div>

            </div>
        </div>

    )
}

export default HomeBg