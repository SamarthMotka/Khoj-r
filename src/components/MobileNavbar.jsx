import { Link  } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';


const MobileNavbar = ({ onCloseMenu }) => {
    const data = ['Wearables', 'Homeware', 'Accessories'];

    const [open, setOpen] = useState(null);

    const toggleProducts = () => {
        setOpen(!open)
    }

    const handleLinkClick = () => {
        setOpen(false);
        onCloseMenu?.(); // safely call if provided
    };

    return (
        <div className='w-[90%] bg-gray-100 px-7 py-5 rounded-md text-black quicksand'>
            <div onClick={ handleLinkClick } className='my-3'><Link to='/'>Home</Link></div>
            <div onClick={handleLinkClick} className='my-3'><Link to='/about_us'>About Us</Link></div>
            <div onClick={handleLinkClick} className='my-3'><Link to='/process'>Process</Link></div>
            <div   className='my-3' onClick={toggleProducts}>
                <div>Products -</div>
                {open && (<ul className='bg-gray-200 rounded-md p-3 ml-4 mt-2 space-y-2'>
                    {data.map((item, index) => (
                        <li key={index}>
                            <Link to={`/${item.toLowerCase()}`} onClick={handleLinkClick} className='text-sm text-gray-700 hover:text-[#6d567b]'>
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>)}
            </div>
            <div className='my-3'><Link onClick={handleLinkClick} to='/contact_us'>Contact Us</Link></div>
        </div>
    );
};

export default MobileNavbar;
