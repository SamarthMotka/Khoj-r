import React from 'react'
import { useState, useEffect } from 'react'

const HomeCarousel = ({ image, show }) => {

  const [currIndex, setCurrIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currIndex]);

  const goToNext = () => {
    setCurrIndex((preIndex) => (preIndex + 1) % image.length);
  };

  const goToPrev = () => {
    setCurrIndex((preIndex) => preIndex === 0 ? image.length - 1 : preIndex - 1);
  };

  const goToSlide = (index) => {
    setCurrIndex(index);
  }

  return (
    <div className='flex  flex-col  justify-center bg-white '>
      <div className='relative max-h-[80vh] px-10 lg:px-30 mb-[20px] overflow-hidden  '>
        <img className='bg-cover bg-center bg-no-repeat' src={image[currIndex]}></img>
      </div>

      <div className="flex justify-center mt-4">
        {show ? image.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${currIndex === index
              ? "bg-gray-800"
              : "bg-gray-400"
              }`}
            onClick={() => goToSlide(index)}
          />
        )) : ""}
      </div>

    </div>
  )
}


export default HomeCarousel