import React from 'react'
import DisplayPage from './DisplayPage'
import PathCard from './PathCard'
import Testimonials from './Testimonials'

const data = [
  {
    imgUrl: "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292430/Khoj/Accessories/Bags/vck7a0zn1czaft6vutdq.jpg",
    heading: "Hand Bags",
    pageUrl: "bagsandpouches",
    desc: "Khoj's hand-painted handbags are the perfect blend of art and functionality, adding a vibrant touch to any outfit.",
    title: "Hand-Painted Bags and Pouches",
  },
  {
    imgUrl: "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292408/Khoj/Accessories/Dupattas/lxhq4st3lvhhibvayctd.jpg",
    heading: "Dupattas",
    pageUrl: "dupatta",
    title: "Dupattas",
    desc: "Khoj's hand-painted dupattas offer a unique blend of elegance and artistry, enhancing any traditional outfit.",
  },
  {
    imgUrl: "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292355/Khoj/Accessories/Pouches/p5ksw1haw5y1sczzqres.jpg",
    heading: "Hand painted pouches",
    title: "Sunglass Covers and Travel Kits",
    pageUrl: "bagsandpouches",
    desc: "Khoj's hand-painted pouches combine practicality with artistic flair, perfect for carrying essentials in style",
  },
  {
    imgUrl: "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292326/Khoj/Accessories/SunglassesCover/ukdb8mder5rcenfdhtua.jpg",
    heading: "Sunglass Covers",
    title: "Sunglass Covers and Travel Kits",
    pageUrl: "coverandkits",
    desc: "Khoj's hand-painted sunglass covers are crafted with high-quality materials and vibrant designs, offering stylish protection for your eyewear.",
  },
  {
    imgUrl: "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292303/Khoj/Accessories/TravelKits/kd1urqqhjchazzvaulsl.jpg",
    heading: "Travel Kits",
    title: "Sunglass Covers and Travel Kits",
    pageUrl: "coverandkits",
    desc: "Khoj's hand-painted travel kits are designed for both style and convenience, featuring durable fabrics and artistic designs.",
  },
  {
    imgUrl: "https://res.cloudinary.com/da5crwlqh/image/upload/v1719563296/WhatsApp_Image_2024-06-26_at_00.32.15_cea43a4b_yr8qec.jpg",
    heading: "Diaries",
    title: "Diaries",
    pageUrl: "diaries",
    desc: "Khoj's hand-painted diaries are a perfect blend of art and functionality, featuring unique designs on high-quality pages. Each diary is a beautiful keepsake, ideal for capturing your thoughts and memories in style.",
  },


]


const Accesories = () => {
  return (


      <>
        <PathCard heading={'Accessories'} link={'accessories'} linkName={'Accessories'} img={'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292424/Khoj/Accessories/Bags/zoqyfoki7v6lewrs0jln.jpg'}></PathCard>
        <DisplayPage data={data}></DisplayPage>
        <Testimonials></Testimonials>
      </>
    )
  }


export default Accesories