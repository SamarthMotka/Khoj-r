import React from 'react'
import { Link } from 'react-router-dom';
import LinkIcon from '@mui/icons-material/Link';

const GalleryCards = ({ linkUrl, catTag, imgUrl }) => {
    return (
        <div style={{ backgroundImage: `url(${imgUrl})` }} className='m-4 cursor-default quicksand group relative overflow-hidden bg-cover bg-center w-[300px] h-[400px]' >
            <div className='cursor-default absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all  duration-300'>
                <h5 className='cursor-default  absolute top-4 left-4 py-1 px-2 text-[#6d567b] text-sm inline-block bg-[#ffffffaa] '>{catTag}</h5>
                <Link className='cursor-default absolute inset-0 opacity-0 hover:opacity-100 text-white flex items-center justify-center h-full w-full' to={`/${linkUrl}`}>
                    <div className='cursor-pointer'>
                        <LinkIcon fontSize='large' />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default GalleryCards;