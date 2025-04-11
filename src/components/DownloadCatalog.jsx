import React from 'react'

const DownloadCatalog = () => {
    return (

        <div className='bg-white  h-[120px] flex quicksand'>
            <a href='https://drive.google.com/file/d/12Vgsla74Ummzz3w-9s3HZPEtZt_UUD70/view?usp=drive_link' target='_blank' className='hover:bg-[#6d567b] hover:text-white border-[4px] border-[#6d567b] text-[#6d567b] mx-auto my-auto  py-[10px] px-[15px] transition-all duration-1200' download='KhojBrochure.pdf'>
                <button type='submit' className='uppercase ' >
                    Download Catalog
                </button>
            </a>
        </div>
    )
}

export default DownloadCatalog