'use client'
import DisplayPage from './DisplayPage'
import PathCard from './PathCard'
import Testimonials from './Testimonials'
import React from 'react'

const data = [
  {
    imgUrl: 'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292542/Khoj/Wearables/Aprons/dnpvwepulndr6y7c3sbb.jpg',
    heading: 'Cooking Aprons',
    pageUrl: 'aprons',
    desc: "Discover Khoj's hand- painted aprons, where art meets functionality.Each apron is uniquely designed, adding a touch of elegance to your kitchen attire.",
  },
  {
    imgUrl: 'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292647/Khoj/Wearables/TopsWomen/hsnz83wkalj5g4s7hp7n.jpg',
    heading: 'Women\'s Funky Tops',
    pageUrl: 'women',
    desc: 'Step up your style with Khoj\'s women\'s funky tops, featuring bold, hand-painted designs by Yashvi Shah. Each top is a statement piece, blending artistic flair with vibrant fashion.',
  },
  {
    imgUrl: 'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292633/Khoj/Wearables/Kids/h91d1htff3smhsvcql4b.jpg',
    heading: 'Kidswear',
    pageUrl: 'kidswear',
    desc: 'Khoj\'s hand- painted kid\'s wear offers the perfect blend of softness and vibrant colors. Yashvi Shah\'s designs bring playful artistry to comfortable, high - quality clothing for children.',
  },
  {
    imgUrl: 'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292674/Khoj/Wearables/TopsMen/fcnapujrv3vixklwe3kf.jpg',
    heading: "Men's Wear",
    pageUrl: 'men',
    desc: "Khoj's hand-painted men's kurtas combine traditional elegance with contemporary art. Each kurta features unique designs, offering a stylish and distinctive look.",
  },
  {
    imgUrl: 'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292649/Khoj/Wearables/TopsWomen/qpogzk0amghkv8z8vckz.jpg',
    heading: 'Women\'s Tshirts',
    pageUrl: 'women',
    desc: "Khoj's women's hand-painted t-shirts bring a touch of artistry to everyday wear. Each t-shirt features unique, vibrant designs, making them perfect for those who love to stand out.",
  },
  {
    imgUrl: 'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292677/Khoj/Wearables/WeddingCollection/oetypfpr6lgnxqizsyw7.jpg',
    heading: 'Traditional wear',
    pageUrl: 'traditionalwear',
    desc: "Khoj's traditional wear, hand-painted, combines cultural heritage with artistic elegance. Each piece showcases intricate designs, perfect for celebrating traditions with a modern twist.",
  },
]

const Wearables = () => {
  return (
    <>
      <PathCard heading={'Wearables'} link={'Wearables'} linkName={'Wearables'} img={'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292394/Khoj/Accessories/Dupattas/w2pas0q5iqo70lmukhjs.webp'}></PathCard>
      <DisplayPage data={data}></DisplayPage>
      <Testimonials></Testimonials>
    </>
  )
}

export default Wearables;