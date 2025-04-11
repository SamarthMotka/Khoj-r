import { Link  } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';


const MobileNavbar = () => {
    const data = ['Wearables', 'Homeware', 'Accessories'];

    const [open, setOpen] = useState(null);

    const toggleProducts = () => {
        setOpen(!open)
    }

    return (
        <div className='w-[90%] bg-gray-100 px-7 py-5 rounded-md text-black quicksand'>
            <div className='my-3'><Link href='/home'>Home</Link></div>
            <div className='my-3'><Link href='/about_us'>About Us</Link></div>
            <div className='my-3'><Link href='/process'>Process</Link></div>
            <div className='my-3' onClick={toggleProducts}>
                <div>Products -</div>
                {open && (<ul className='bg-gray-200 rounded-md p-3 ml-4 mt-2 space-y-2'>
                    {data.map((item, index) => (
                        <li key={index}>
                            <Link href={`/${item.toLowerCase()}`} className='text-sm text-gray-700 hover:text-[#6d567b]'>
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>)}
            </div>
            <div className='my-3'><Link href='/contact_us'>Contact Us</Link></div>
        </div>
    );
};

export default MobileNavbar;
