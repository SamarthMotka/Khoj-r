import React from 'react'

const ProcessCard = () => {
    return (
        <div className='bg-white  quicksand '>
            <h1 className='text-3xl md:text-5xl my-[40px] font-thin text-center text-[#6d567b]'>The Process</h1>
            <div className='flex flex-col lg:flex-row lg:w-[80%] mx-auto'>
                <div className='max-w-[500px] lg:p-[2rem] mx-auto my-auto'>
                    <img src='https://res.cloudinary.com/da5crwlqh/image/upload/v1718292850/Khoj/bpblz5mspwxgzdrpns94.jpg'></img>
                </div>
                <div className='text-[#6d567b] p-10 md:p-12 md:text-sm text-justify '>
                    <p className='mb-4'>At Khoj, we are passionate about transforming fabric waste into unique, hand-painted masterpieces. Our process blends creativity, sustainability, and craftsmanship to create stunning products that tell a story.</p>
                    <ul className='space-y-4 list-disc pl-4'>
                        <li>Collection of Fabric Waste: We begin by collecting high-quality fabric waste from various sources. These materials, often overlooked, are rich in potential and perfect for upcycling into new, beautiful creations.</li>
                        <li>Design and Patchwork: We give new life to these fabrics. We carefully select and combine different pieces to create a harmonious patchwork design, ensuring each piece is unique and aesthetically pleasing.</li>
                        <li>Hand Painting: Once the patchwork is ready, our skilled artisans hand-paint intricate designs onto the fabric. This step adds a personalized touch and transforms each piece into a work of art.</li>
                        <li>Crafting the Final Product: The hand-painted fabric is then crafted into various products such as bags, outfits, and accessories. Each product is meticulously stitched and finished, ensuring high quality and durability.</li>
                        <li>Quality Check and Packaging: Before our products reach you, they undergo a rigorous quality check. We ensure that each item meets our high standards. Finally, the products are beautifully packaged, ready to bring joy to their new owners.</li>
                        <li>From Us to You: Our commitment to sustainability and artistry ensures that each product is not only unique but also environmentally friendly. By choosing Khoj, you are supporting a greener planet and the art of handcrafting.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProcessCard