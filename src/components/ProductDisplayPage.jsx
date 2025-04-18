import React from 'react'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import HomeCarousel from './HomeCarousel';
import { useParams, Link } from 'react-router-dom'
import { detail } from '../utils/constants';
import PathCard from './PathCard';

const ProductDisplayPage = () => {


    const { name } = useParams();
    const decodedName = decodeURIComponent(name);

    const data = detail.find(item => item.title === decodedName);
    console.log(data);
    

    if (!data) {
        return <div className="text-center text-xl text-red-500">Product not found</div>;
    }

    return (

        <>
            <PathCard heading={data.title} link={data.title} linkName={data.title} img={data.pathLink}></PathCard>

            <div className='bg-white text-[#686D76] p-4 pt-20 md:px-10 lg:px-30 quicksand '>
                <div className='flex flex-col md:flex-row'>
                    <div className='lg:w-2/5 max-h-[500px] md:h-[500px] flex justify-center'>
                        < HomeCarousel p={10}  image={data.imgArr}></HomeCarousel>
                    </div>
                    <div className='lg:w-3/5 sm:px-10 md:p-0'>
                        <h1 className='font-bold text-3xl lg:text-5xl mb-3 text-center md:text-start text-[#6d567b]'>{data.title}</h1>
                        <p className='text-md my-2 text-justify' >{data.descArray[0]}</p>
                        <p className='text-md my-2 text-justify' >{data.descArray[1]}</p>
                    </div>
                </div>
                <div className='flex flex-col justify-between  md:flex-row mt-3 md:mt-3'>
                    <div className='flex flex-col p-4 md:px-30 md:w-4/5'>
                        <div className='italic'><FormatQuoteIcon className='relative -top-[5px] rotate-180' /><span>{data.tReview}</span><FormatQuoteIcon /></div>
                        <div className='flex flex-col lg:flex-row'>
                            <div className='p-4 mx-auto lg:mx-0'>
                                <img className='border-[4px] border-[#666666] rounded-[50%]  max-w-[50px] md:max-w-[70px]' src="https://res.cloudinary.com/da5crwlqh/image/upload/v1718291968/Khoj/de5db1gmseithwvrmso7.png"></img>
                            </div>
                            <div className='my-auto text-center lg:text-start'>
                                <h1 className='text-sm font-bold text-[#6d567b]'>{data.tName}</h1>
                                <p className='text-xs' >{data.tDesignation}</p>
                            </div>
                        </div>
                    </div>
                    <div className='px-10 md:p-0 text-center md:text-start'>
                        <h1 className='text-[#6d567b] px-2 lg:mt-0 text-sm lg:text-2xl my-3 font-bold'>Product Information</h1>
                        <div className='m-2'>
                            <h3 className='text-[#6d567b] text-sm '>Category</h3>
                            <p className='text-xs'>{data.Category}</p>
                        </div>
                        <div className='m-2'>
                            <h3 className='text-[#6d567b] text-sm '>Material</h3>
                            <p className='text-xs'>{data.material}</p>
                        </div>
                        <div className='m-2'>
                            <h1 className='text-[#6d567b] text-sm '>Customization</h1>
                            <p className='text-xs'>Available as per client's needs</p>
                        </div>
                        <div className='m-2'>
                            <h1 className='text-[#6d567b] text-sm '>Time to deliver</h1>
                            <p className='text-xs'>{data.deliveryTime}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDisplayPage;