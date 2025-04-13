import React from 'react'
import DisplayCards from './DisplayCards'


const DisplayPage = ({ data }) => {
    return (
        <div className='flex flex-wrap justify-center pt-6 px-4 md:px-10  bg-white quicksand'>
            {data.map((dat, index) => (
                <DisplayCards key={index} imgUrl={dat.imgUrl} heading={dat.heading} pageUrl={dat.pageUrl} desc={dat.desc}></DisplayCards>
            ))}
        </div>
    )
}

export default DisplayPage