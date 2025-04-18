import React from 'react'
import { Link } from 'react-router-dom'

const DisplayCards = ({ imgUrl, heading, desc, pageUrl }) => {
    return (
        <div className='m-2 w-full sm:w-1/3 lg:w-1/4 quicksand '>
            <div className=''>
                <img className='h-[250px] bg-center object-cover w-full' src={imgUrl}></img>
            </div>
            <Link to={`/${encodeURIComponent(pageUrl)}`}>
                <div className='px-6 pt-2 pb-4 h-[200px] border border-t-0 border-[#ad89c6]'>
                    <h1 className='font-bold text-lg md:text-2xl text-[#6d567b]'>{heading}</h1>
                    <p className='mt-2 text-xs text-[#686d76]'>{desc}</p>
                </div>
            </Link>
        </div>
    )
}

export default DisplayCards