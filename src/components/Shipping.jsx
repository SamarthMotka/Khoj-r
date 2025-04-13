import React from 'react'
import PathCard from './PathCard'

const Shipping = () => {
    return (
        <>
            <PathCard heading={'Shipping and return policy'} img={'https://res.cloudinary.com/da5crwlqh/image/upload/v1718291883/Khoj/ouo12kekciplgaecuqn5.jpg'} link={'shipping'} linkName={'Shipping and return policy'} ></PathCard>
            <div className='bg-white text-[#6c6d76] text-md lg:text-2xl p-10 lg:px-[10rem] lg:py-20 quicksand'>
                <ul className='list-disc space-y-2 text-justify'>
                    <li>We offer shipping pan India.</li>
                    <li>Orders are typically processed and shipped within 15 business days.</li>
                    <li>Shipping costs and delivery times may vary depending on the destination and shipping method selected during checkout.</li>
                    <li>Customers will receive a shipping confirmation email with tracking information once their order has been dispatched.</li>
                    <li>Please ensure that the shipping address provided during checkout is accurate to avoid delays or misdeliveries.</li>
                </ul>
            </div>
        </>
    )
}

export default Shipping