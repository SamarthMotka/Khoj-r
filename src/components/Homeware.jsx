
import DisplayPage from './DisplayPage'
import PathCard from './PathCard'
import Testimonials from './Testimonials'
import React from 'react'

const data = [
  {
    imgUrl: "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292160/Khoj/Homeware/Tablemats/frodwicukgdxfsj57sy7.jpg",
    heading: "Table Mats",
    pageUrl: "tablemats",
    desc: "Khoj's hand-painted table mats and runners, crafted by Yashvi Shah, bring an artistic touch to any dining table",
  },
  {
    imgUrl: "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292101/Khoj/Homeware/Tablerunners/sn4h9rfpieu7g0nyxrze.webp",
    heading: "Table Runners",
    pageUrl: "tablemats",
    desc: "Khoj's hand-painted table mats and runners, crafted by Yashvi Shah, bring an artistic touch to any dining table.",
  },
  {
    imgUrl: "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292101/Khoj/Homeware/Tablerunners/sn4h9rfpieu7g0nyxrze.webp",
    heading: "Dining sets",
    pageUrl: "tablemats",
    desc: "Khoj's hand-painted table mats and runners, crafted by Yashvi Shah, bring an artistic touch to any dining table.",
  },
  {
    imgUrl: "https://res.cloudinary.com/da5crwlqh/image/upload/v1719042582/White_Orange_Minimalist_Decorative_Lamps_Instagram_Post_qiwysn.png",
    heading: "Lamps",
    pageUrl: "lamp",
    desc: "Khoj's hand-painted lamps bring a unique artistic flair to your home decor, illuminating spaces with vibrant, intricate designs.",
  },

]

const Homeware = () => {
  return (
    <>
      <PathCard heading={'Homeware'} link={'homeware'} linkName={'Homeware'} img={'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292101/Khoj/Homeware/Tablerunners/sn4h9rfpieu7g0nyxrze.webp'}></PathCard>
      <DisplayPage data={data}></DisplayPage>
      <Testimonials></Testimonials>
    </>
  )
}

export default Homeware;