import React, { useState, useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Add scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-[30px]  right-[30px] z-50 p-2 box-content border-1 rounded-md bg-[#766184] text-white hover:bg-white hover:text-[#766184] shadow-lg transition-colors duration-500 hover:border hover:border-text-[#766184]"
            >
                <ArrowUpwardIcon fontSize='small' />
            </button>
        )
    );
};

export default BackToTop;
