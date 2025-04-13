import React from 'react'
import TuneIcon from '@mui/icons-material/Tune';
import { Link } from 'react-router-dom';

const CustomizeBtn = ({ show }) => {
    return (
        show ? (<Link className='z-50 fixed  bottom-[30px] left-[30px] quicksand' to={'/customization'}><button className='px-4 z-50 shadow-lg text-sm py-2 border-none rounded-md text-white bg-[#766184] hover:text-[#766184] transition-colors duration-700 hover:bg-white' ><TuneIcon fontSize='small' className='mr-2' />Customize</button></Link>) : <div></div>

    )
}

export default CustomizeBtn