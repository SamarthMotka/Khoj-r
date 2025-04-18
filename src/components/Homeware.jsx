
import DisplayPage from './DisplayPage'
import PathCard from './PathCard'
import Testimonials from './Testimonials'
import React from 'react'

const data = [
  {
    imgUrl: "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292160/Khoj/Homeware/Tablemats/frodwicukgdxfsj57sy7.jpg",
    heading: "Table Mats",
    // pageUrl: "tablemats",
    desc: "Khoj's hand-painted table mats and runners, crafted by Yashvi Shah, bring an artistic touch to any dining table",
    link: "",
    pathLink: "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292103/Khoj/Homeware/Tablerunners/jeb74xo4rhpkwwydqpcs.jpg",
    title: "TableMats and Runners",
    descArray: [
      "Khoj's hand-painted table mats and runners, crafted by Yashvi Shah, bring an artistic touch to any dining table. Each piece boasts intricate and vibrant designs, turning your dining area into a captivating visual space. Made with high-quality, washable materials, these table mats and runners are not only beautiful but also durable and easy to maintain. Ideal for both everyday use and special occasions, Khoj's creations add a unique aesthetic that enhances your dining experience.",

      "These hand-painted table mats and runners serve as functional items and statement pieces, showcasing your appreciation for art and style. Whether hosting a dinner party or enjoying a family meal, Khoj's stunning designs make your table setting exceptional. The fusion of traditional craftsmanship with contemporary patterns ensures these pieces complement any decor, adding sophistication and charm to your home. Elevate your dining decor with Khoj's exquisite, easily washable table accessories, making every meal a delightful visual experience.arments that celebrate craftsmanship and timeless style."],
    Category: "TableMats and Runners",
    material: "Cotton",
    deliveryTime: "1-2 Weeks",
    tName: "Natasha",
    tDesignation: "A happy customer",
    tReview: " I felt truly special when my guests couldn't stop complimenting Khoj's hand-painted table mats and runners during dinner. They were captivated by the vibrant colors, and it sparked delightful conversations. These pieces not only enhanced my dining table but also made the evening memorable.",
    imgArr: [
      'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292160/Khoj/Homeware/Tablemats/frodwicukgdxfsj57sy7.jpg',
      "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292103/Khoj/Homeware/Tablerunners/yrdru2fr8hz6nwhllmbs.jpg",
      "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292101/Khoj/Homeware/Tablerunners/sn4h9rfpieu7g0nyxrze.webp",
      "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292104/Khoj/Homeware/Tablerunners/vkfeytoigibuctkyb60r.jpg",
      "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292102/Khoj/Homeware/Tablerunners/l8g2t1xponb0dmc3nlhr.jpg",
    ]
  },
  {
    imgUrl: "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292101/Khoj/Homeware/Tablerunners/sn4h9rfpieu7g0nyxrze.webp",
    heading: "Table Runners",
    // pageUrl: "tablemats",
    desc: "Khoj's hand-painted table mats and runners, crafted by Yashvi Shah, bring an artistic touch to any dining table.",
    link: "",
    pathLink: "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292103/Khoj/Homeware/Tablerunners/jeb74xo4rhpkwwydqpcs.jpg",
    title: "TableMats and Runners",
    descArray: [
      "Khoj's hand-painted table mats and runners, crafted by Yashvi Shah, bring an artistic touch to any dining table. Each piece boasts intricate and vibrant designs, turning your dining area into a captivating visual space. Made with high-quality, washable materials, these table mats and runners are not only beautiful but also durable and easy to maintain. Ideal for both everyday use and special occasions, Khoj's creations add a unique aesthetic that enhances your dining experience.",

      "These hand-painted table mats and runners serve as functional items and statement pieces, showcasing your appreciation for art and style. Whether hosting a dinner party or enjoying a family meal, Khoj's stunning designs make your table setting exceptional. The fusion of traditional craftsmanship with contemporary patterns ensures these pieces complement any decor, adding sophistication and charm to your home. Elevate your dining decor with Khoj's exquisite, easily washable table accessories, making every meal a delightful visual experience.arments that celebrate craftsmanship and timeless style."],
    Category: "TableMats and Runners",
    material: "Cotton",
    deliveryTime: "1-2 Weeks",
    tName: "Natasha",
    tDesignation: "A happy customer",
    tReview: " I felt truly special when my guests couldn't stop complimenting Khoj's hand-painted table mats and runners during dinner. They were captivated by the vibrant colors, and it sparked delightful conversations. These pieces not only enhanced my dining table but also made the evening memorable.",
    imgArr: ['https://res.cloudinary.com/da5crwlqh/image/upload/v1718292160/Khoj/Homeware/Tablemats/frodwicukgdxfsj57sy7.jpg',

      "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292103/Khoj/Homeware/Tablerunners/yrdru2fr8hz6nwhllmbs.jpg",

      "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292101/Khoj/Homeware/Tablerunners/sn4h9rfpieu7g0nyxrze.webp",

      "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292104/Khoj/Homeware/Tablerunners/vkfeytoigibuctkyb60r.jpg",

      "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292102/Khoj/Homeware/Tablerunners/l8g2t1xponb0dmc3nlhr.jpg",
    ]
  },
  {
    imgUrl: "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292101/Khoj/Homeware/Tablerunners/sn4h9rfpieu7g0nyxrze.webp",
    heading: "Dining sets",
    // pageUrl: "tablemats",
    desc: "Khoj's hand-painted table mats and runners, crafted by Yashvi Shah, bring an artistic touch to any dining table.",
    link: "",
    pathLink: "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292103/Khoj/Homeware/Tablerunners/jeb74xo4rhpkwwydqpcs.jpg",
    title: "TableMats and Runners",
    descArray: [
      "Khoj's hand-painted table mats and runners, crafted by Yashvi Shah, bring an artistic touch to any dining table. Each piece boasts intricate and vibrant designs, turning your dining area into a captivating visual space. Made with high-quality, washable materials, these table mats and runners are not only beautiful but also durable and easy to maintain. Ideal for both everyday use and special occasions, Khoj's creations add a unique aesthetic that enhances your dining experience.",

      "These hand-painted table mats and runners serve as functional items and statement pieces, showcasing your appreciation for art and style. Whether hosting a dinner party or enjoying a family meal, Khoj's stunning designs make your table setting exceptional. The fusion of traditional craftsmanship with contemporary patterns ensures these pieces complement any decor, adding sophistication and charm to your home. Elevate your dining decor with Khoj's exquisite, easily washable table accessories, making every meal a delightful visual experience.arments that celebrate craftsmanship and timeless style."],
    Category: "TableMats and Runners",
    material: "Cotton",
    deliveryTime: "1-2 Weeks",
    tName: "Natasha",
    tDesignation: "A happy customer",
    tReview: " I felt truly special when my guests couldn't stop complimenting Khoj's hand-painted table mats and runners during dinner. They were captivated by the vibrant colors, and it sparked delightful conversations. These pieces not only enhanced my dining table but also made the evening memorable.",
    imgArr: ['https://res.cloudinary.com/da5crwlqh/image/upload/v1718292160/Khoj/Homeware/Tablemats/frodwicukgdxfsj57sy7.jpg',

      "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292103/Khoj/Homeware/Tablerunners/yrdru2fr8hz6nwhllmbs.jpg",

      "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292101/Khoj/Homeware/Tablerunners/sn4h9rfpieu7g0nyxrze.webp",

      "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292104/Khoj/Homeware/Tablerunners/vkfeytoigibuctkyb60r.jpg",

      "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292102/Khoj/Homeware/Tablerunners/l8g2t1xponb0dmc3nlhr.jpg",
    ]
  },
  {
    imgUrl: "https://res.cloudinary.com/da5crwlqh/image/upload/v1719042582/White_Orange_Minimalist_Decorative_Lamps_Instagram_Post_qiwysn.png",
    heading: "Lamps",
    // pageUrl: "lamp",
    desc: "Khoj's hand-painted lamps bring a unique artistic flair to your home decor, illuminating spaces with vibrant, intricate designs.",
    link: "",
    pathLink: "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292103/Khoj/Homeware/Tablerunners/jeb74xo4rhpkwwydqpcs.jpg",
    title: "Lamps",
    descArray: [
      "Khoj's hand-painted lamps are a perfect blend of artistry and functionality, designed to enhance the aesthetic appeal of any room in your home. Each lamp is meticulously crafted with intricate designs and vibrant colors that reflect the rich cultural heritage and creative spirit of Khoj. Whether placed in your living room, study, or hallway, these lamps add a unique and artistic touch to your interior decor, making every corner of your home come alive with elegance and style. The soft, ambient light they emit creates a warm and inviting atmosphere, transforming your space into a haven of comfort and beauty.",

      "In the bedroom, Khoj's hand-painted lamps serve as exquisite accent pieces that elevate the overall ambiance and create a serene and sophisticated environment. The delicate patterns and striking hues of the lampshades not only provide a source of light but also act as decorative focal points that draw attention and admiration. Their elegant designs complement a variety of bedroom themes, from modern minimalist to traditional chic, ensuring they blend seamlessly with your personal style. With Khoj's hand-painted lamps, you can infuse your bedroom with an artistic flair that speaks to your taste for quality and craftsmanship."],

    Category: "Homeware",
    material: "Cotton",
    deliveryTime: "1-2 Weeks",
    tName: "Shaily",
    tDesignation: "A happy customer",
    tReview: "I definitely adore Khoj's hand-painted lamps in my bedroom! They add such a unique, artistic touch and create a cozy, elegant atmosphere that I look forward to every night.",


    imgArr: ['https://res.cloudinary.com/da5crwlqh/image/upload/v1719042582/White_Orange_Minimalist_Decorative_Lamps_Instagram_Post_qiwysn.png'
    ]
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