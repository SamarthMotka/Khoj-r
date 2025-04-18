import React from 'react'
import GalleryCards from './GalleryCards'
import { useState } from 'react';


const GalleryHome = () => {

  const categories = ['All', 'Bags and Pouches', 'Table Mats and Runners', 'Sunglass Covers and Travel Kits', 'Men/Women Wearable', 'Kidswear'];



  const products = [
    {
      id: 1,
      catTag: 'Kidswear', imgUrl: 'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292543/Khoj/Wearables/Kids/luaca1bx8ocn7ho6st9r.jpg', linkUrl: 'Kidswear'
    },

    { 
      id: 2, 
      catTag: 'Bags and Pouches', 
      imgUrl: 'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292347/Khoj/Accessories/Pouches/fpk7rxzznq7thzbde3np.jpg', 
      linkUrl: 'Hand-Painted Bags and Pouches' },

    { 
      id: 3, 
      catTag: 'Table Mats and Runners', 
      imgUrl: 'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292160/Khoj/Homeware/Tablemats/frodwicukgdxfsj57sy7.jpg', 
      linkUrl: 'TableMats and Runners' },

    { 
      id: 4, 
      catTag: 'Sunglass Covers and Travel Kits', 
      imgUrl: 'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292326/Khoj/Accessories/SunglassesCover/ukdb8mder5rcenfdhtua.jpg', 
      linkUrl: 'Sunglass Covers and Travel Kits' },

    { 
      id: 5, 
      catTag: 'Bags and Pouches', 
      imgUrl: 'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292425/Khoj/Accessories/Bags/qog8z2kcllj6llopmcr9.jpg', 
      linkUrl: 'Hand-Painted Bags and Pouches' },

    { 
      id: 6, 
      catTag: 'Table Mats and Runners', 
      imgUrl: 'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292103/Khoj/Homeware/Tablerunners/yrdru2fr8hz6nwhllmbs.jpg', 
      linkUrl: 'TableMats and Runners' },

    { 
      id: 7, 
      catTag: 'Sunglass Covers and Travel Kits', 
      imgUrl: 'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292310/Khoj/Accessories/TravelKits/ygqqbcdm5podjsl0ks1n.jpg', 
      linkUrl: 'Sunglass Covers and Travel Kits' },

    { 
      id: 8, 
      catTag: 'Kidswear', 
      imgUrl: 'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292624/Khoj/Wearables/Kids/jstw1y9bxx8ayrpo8m87.jpg', 
      linkUrl: 'Kidswear' },

    { 
      id: 9, 
      catTag: 'Bags and Pouches', 
      imgUrl: 'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292430/Khoj/Accessories/Bags/gczl2xpw54jxh6lhgydi.jpg', 
      linkUrl: 'Hand-Painted Bags and Pouches' },

    { 
      id: 10, 
      catTag: 'Kidswear', 
      imgUrl: 'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292549/Khoj/Wearables/Kids/kgkjymehkupotcgspclq.jpg', 
      linkUrl: 'Kidswear' },

    { 
      id: 11, 
      catTag: 'Table Mats and Runners', 
      imgUrl: 'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292102/Khoj/Homeware/Tablerunners/l8g2t1xponb0dmc3nlhr.jpg', 
      linkUrl: 'TableMats and Runners' },

    { 
      id: 12, 
      catTag: 'Men/Women Wearable', 
      imgUrl: 'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292689/Khoj/Wearables/TopsMen/dpq8zo5xxcfkazwdmzjg.jpg', 
      linkUrl: 'Menswear' },

    { 
      id: 13, 
      catTag: 'Men/Women Wearable', 
      imgUrl: 'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292697/Khoj/Wearables/TopsWomen/djbt1akyqeztmhqoq5wx.jpg', 
      linkUrl: 'Womenswear' },

    { 
      id: 14, 
      catTag: 'Men/Women Wearable', 
      imgUrl: 'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292560/Khoj/Wearables/TopsWomen/m4677bxvalc8ppf4pumb.jpg', 
      linkUrl: 'Womenswear' },

    { 
      id: 15, 
      catTag: 'Sunglass Covers and Travel Kits', 
      imgUrl: 'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292298/Khoj/Accessories/TravelKits/vdydjrtkbv8c8tpmj84v.jpg', 
      linkUrl: 'Sunglass Covers and Travel Kits' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.catTag === selectedCategory);

  return (
    <div>
      <div className='bg-white text-center quicksand'>
        <h1 className='text-2xl text-[#6d567b]'> Product Gallery</h1>
        <p className='text-md text-[#686d76] px-10 lg:px-6 pb-8'> Explore our stunning product gallery to discover the exquisite hand-painted creations by Khoj.</p>
      </div>
      <div className='bg-white'>
        <div className='flex justify-center flex-wrap space-x-4 mb-6'>
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 text-[#686d76] transition-all ${selectedCategory === category ? 'text-[#6d567b]' : ''
                }`}
              onClick={() => setSelectedCategory(category)}
            >{category}</button>
          ))};
        </div>
        <div className='flex justify-center '>
          <div className="flex justify-center  flex-wrap  px-4 md:px-10  lg:px-30 ">
            {filteredProducts.map(product => (
              <GalleryCards key={product.id}
                catTag={product.catTag}
                imgUrl={product.imgUrl}
                linkUrl={product.linkUrl}
              ></GalleryCards>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryHome