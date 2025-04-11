import React from 'react'
import { useState, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import MobileNavbar from './MobileNavbar';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [active, setActive] = useState("HOME");
    const [showProductMenu, setShowProductMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`w-full z-50  quicksand  transition-all duration-500 ${isSticky ? "fixed top-0 bg-white" : "absolute bg-transparent w-[100%]"} `}>
            <div className={`flex px-8 justify-between lg:justify-around $ text-black `}>
                <img className='w-[70px] md:w-[90px]' src='https://res.cloudinary.com/da5crwlqh/image/upload/v1718291882/Khoj/mokzpfmuxcif8pxqsqz1.svg'></img>
                <ul className='hidden lg:flex text-xs justify-center align-middle space-x-[40px]'>
                    {['HOME', 'ABOUT US', 'PROCESS', 'PRODUCTS', 'CONTACT US'].map((tab) => (
                        <li
                            key={tab}
                            className={`relative my-auto cursor-pointer border-b-2 ${active === tab ? "border-[#6d567b] text-[#6d567b]" : "border-transparent text-black"} hover:border-[#6d567b] hover:text-[#6d567b]`}
                            onClick={() => {
                                if (tab !== "PRODUCTS") {
                                    setActive(tab);
                                }
                            }}
                            onMouseEnter={() => tab === "PRODUCTS" && setShowProductMenu(true)}

                        >
                            <Link href={tab === "HOME" || tab === "PRODUCTS" ? "/" : `/${tab.toLowerCase().replace(/\s+/g, "_")}`}>
                                {tab}
                            </Link>

                            {tab === "PRODUCTS" && showProductMenu && (
                                <ul className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 py-2 w-40" onMouseLeave={() => tab === "PRODUCTS" && setShowProductMenu(false)}>
                                    {['Wearables', 'Homeware', 'Accessories'].map((category, index) => (
                                        <li key={index} className="px-4 py-2 hover:bg-[#6d567b] hover:text-white cursor-pointer">
                                            <Link href={`/${category.toLowerCase()}`}>
                                                {category}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}


                </ul>
                <div className={`lg:collapse ${isOpen ? "collapse" : "flex"} `} onClick = { handleClick }><MenuIcon fontSize='large' className='my-auto' ></MenuIcon></div>
                
                

            </div>
            {isOpen && (
                <div className=' fixed w-full' >
                    <div className=' my-2 w-[90%] mx-auto flex justify-end  text-black'>
                        <CloseIcon onClick={handleClick}></CloseIcon>
                    </div>
                    <div className='flex justify-center align-middle' >
                        <MobileNavbar className='mx-auto'></MobileNavbar>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar