import React from 'react';
import { Link } from 'react-router-dom';

const PathCard = ({ heading, img, link, linkName }) => {
    return (
        <div className={`quicksand relative h-[40vh] bg-center bg-cover bg-no-repeat before:absolute before:inset-0 before:bg-[#3636369f] before:content-[""]`} style={{ backgroundImage: `url(${img})` }}>
            <div className=' absolute bottom-[30px] left-0 right-0 flex flex-col text-center'>
                <h1 className='text-[2rem] md:text-[4rem]'>{heading}</h1>
                <ol className="flex justify-center  text-lg">
                    <li className='mx-2'>
                        <Link to="/">Home </Link>
                    </li>
                    <span> / </span>
                    <li className='mx-2'>
                        <Link to={`/${link}`}> {linkName}</Link>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default PathCard;