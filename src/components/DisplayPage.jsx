import React from 'react'
import DisplayCards from './DisplayCards'


const DisplayPage = ({ data }) => {
    return (
        <div className='flex flex-wrap justify-center pt-6 px-4 md:px-10  bg-white quicksand'>
            {data.map((dat, index) => (
                
                // console.log(dat)
                
                (<DisplayCards key={index} imgUrl={dat.imgUrl} heading={dat.heading} pageUrl={dat.title} desc={dat.desc}></DisplayCards>)
                
                
            ))}
        </div>
    )
}

export default DisplayPage