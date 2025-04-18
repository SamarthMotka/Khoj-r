'use client'
import DisplayPage from './DisplayPage'
import PathCard from './PathCard'
import Testimonials from './Testimonials'
import React from 'react'

const data = [
  {
    imgUrl: 'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292542/Khoj/Wearables/Aprons/dnpvwepulndr6y7c3sbb.jpg',
    heading: 'Cooking Aprons',
    // pageUrl: 'aprons',
    desc: "Discover Khoj's hand- painted aprons, where art meets functionality.Each apron is uniquely designed, adding a touch of elegance to your kitchen attire.",
    link: "Cooking Aprons",
    pathLink: "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292103/Khoj/Homeware/Tablerunners/jeb74xo4rhpkwwydqpcs.jpg",
    title: "Cooking Aprons",
    descArray: [
      "Khoj's hand-painted cooking aprons bring a touch of artistry to your kitchen. Each apron is meticulously crafted with vibrant, unique designs that make cooking a stylish affair. Made from durable, high-quality materials, these aprons are built to withstand the rigors of daily use. Whether you're a professional chef or a home cook, Khoj's aprons provide the perfect blend of functionality and flair, allowing you to cook in style without compromising on practicality.",

      "In addition to their visual appeal, Khoj's cooking aprons are designed for ease of maintenance. The fabrics are not only sturdy but also easy to wash, ensuring that stains and spills can be quickly and effectively cleaned. This makes them a practical choice for busy kitchens where cleanliness and convenience are essential. By choosing Khoj's hand-painted aprons, you're investing in a durable, stylish accessory that enhances your cooking experience and adds a splash of creativity to your culinary adventures."],

    Category: "Wearables",
    material: "Cotton",
    deliveryTime: "1-2 Weeks",
    tName: "Sakshi",
    tDesignation: "A happy housemaker.",
    tReview: "Ever since I started using Khoj's hand-painted apron, cooking has become more enjoyable. Last weekend, while baking with my kids, they were fascinated by the vibrant designs and wanted aprons just like mine. The apron held up beautifully through the mess and cleaned up easily afterward. It's stylish, durable, and has added a fun element to our kitchen time.",


    imgArr: ['https://res.cloudinary.com/da5crwlqh/image/upload/v1718292544/Khoj/Wearables/Aprons/u5z7ejtb75jauwzslrka.jpg',
      'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292542/Khoj/Wearables/Aprons/dnpvwepulndr6y7c3sbb.jpg',
      'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292636/Khoj/Wearables/Aprons/ys4rxqp22g9vzjlqtstv.jpg'
    ]
  },
  {
    imgUrl: 'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292647/Khoj/Wearables/TopsWomen/hsnz83wkalj5g4s7hp7n.jpg',
    heading: 'Women\'s Funky Tops',
    // pageUrl: 'women',
    desc: 'Step up your style with Khoj\'s women\'s funky tops, featuring bold, hand-painted designs by Yashvi Shah. Each top is a statement piece, blending artistic flair with vibrant fashion.',
    link: "",
    pathLink: "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292103/Khoj/Homeware/Tablerunners/jeb74xo4rhpkwwydqpcs.jpg",
    title: "Womenswear",
    descArray: [
      "Khoj's women's wear collection offers a perfect blend of style and aesthetics, ensuring that you stand out wherever you go. Each garment is meticulously hand-painted with intricate designs, reflecting a unique artistic flair that sets Khoj apart. From elegant dresses to chic tops, Khoj's collection caters to various tastes and occasions, providing women with fashionable choices that make a statement. The vibrant colors and detailed patterns draw the attention of peers, making you the center of admiration every time you wear them.",

      "Beyond their stunning appearance, Khoj's women's wear is designed with practicality in mind. The high-quality fabrics are not only soft and comfortable but also easy to wash, ensuring that your favorite pieces remain fresh and vibrant after each use. Whether you're heading to a social event or a casual outing, Khoj's women's wear combines beauty and convenience, making it a must-have in your wardrobe. Embrace the fusion of art and fashion with Khoj's stylish and easy-to-maintain garments that enhance your look effortlessly."],

    Category: "Wearables",
    material: "Cotton",
    deliveryTime: "1-2 Weeks",
    tName: "Riya",
    tReview: "I absolutely love Khoj's women's wear! The hand-painted designs are so stylish and always get me compliments. Plus, they're easy to wash and maintain, making them perfect for my busy lifestyle.",
    tDesignation: "A happy customer.",


    imgArr: ['https://res.cloudinary.com/da5crwlqh/image/upload/v1718292684/Khoj/Wearables/TopsWomen/ji8g0cj9eegsvamwrnjr.jpg',
      'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292648/Khoj/Wearables/TopsWomen/ohkqe8dwxafyeg1lbdjz.jpg',
      'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292614/Khoj/Wearables/TopsWomen/jbpmmz2pns3pre4zkh2u.jpg',
      'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292555/Khoj/Wearables/TopsWomen/edtybtf84xqe4ettxnq2.jpg',
      'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292555/Khoj/Wearables/TopsWomen/ofvlmly0oqbttim5hnfe.jpg',
      'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292697/Khoj/Wearables/TopsWomen/djbt1akyqeztmhqoq5wx.jpg',
      'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292585/Khoj/Wearables/Blouse/yymkggpezoqcddjhlxs9.jpg'
    ]
  },
  {
    imgUrl: 'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292633/Khoj/Wearables/Kids/h91d1htff3smhsvcql4b.jpg',
    heading: 'Kidswear',
    // pageUrl: 'kidswear',
    desc: 'Khoj\'s hand- painted kid\'s wear offers the perfect blend of softness and vibrant colors. Yashvi Shah\'s designs bring playful artistry to comfortable, high - quality clothing for children.',
    link: "",
    pathLink: "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292103/Khoj/Homeware/Tablerunners/jeb74xo4rhpkwwydqpcs.jpg",
    title: "Kidswear",
    descArray: [
      "Khoj's hand-painted kids' wear combines comfort and creativity in every piece. Each garment is crafted from child-friendly materials, ensuring maximum comfort for your little ones. The high-quality fabrics are soft, breathable, and gentle on delicate skin, making them perfect for everyday wear. With unique, vibrant designs hand-painted onto each outfit, Khoj offers a delightful blend of style and comfort that children will love.",

      "Not only are these clothes comfortable, but they also stand out for their artistic appeal. The intricate hand-painted designs make each piece one-of-a-kind, adding a touch of whimsy and fun to your child's wardrobe. These outfits are perfect for any occasion, from playdates to family gatherings, ensuring your child looks stylish and feels great. Choose Khoj's hand-painted kids' wear for high-quality, comfortable, and uniquely designed clothing that both parents and children will adore."],
    Category: "Kidswear",
    material: "Cotton",
    deliveryTime: "1-2 Weeks",
    tName: "Nitya",
    tDesignation: "A happy mom",
    tReview: " As a mom, I am thrilled with Khoj's hand-painted kids' wear. My infant feels so joyful and comfortable in their soft, child-friendly fabrics. The vibrant, unique designs bring out a big smile every time he wears them. Khoj has truly made dressing up a delightful experience for my little one! ",
    imgArr: [
      'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292624/Khoj/Wearables/Kids/zfhhgaw2729nvuldjuee.jpg',
      "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292624/Khoj/Wearables/Kids/jstw1y9bxx8ayrpo8m87.jpg",
      "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292599/Khoj/Wearables/Kids/gmaqnadluwynwlkvh0tb.jpg",
      "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292549/Khoj/Wearables/Kids/kgkjymehkupotcgspclq.jpg",
      "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292547/Khoj/Wearables/Kids/lrvqxbk7dkfu474nw543.webp",
      'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292546/Khoj/Wearables/Kids/ggrcmvfln1fnkpsfz4do.jpg',
      'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292543/Khoj/Wearables/Kids/luaca1bx8ocn7ho6st9r.jpg'
    ]

  },
  {
    imgUrl: 'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292674/Khoj/Wearables/TopsMen/fcnapujrv3vixklwe3kf.jpg',
    heading: "Men's Wear",
    // pageUrl: 'men',
    desc: "Khoj's hand-painted men's kurtas combine traditional elegance with contemporary art. Each kurta features unique designs, offering a stylish and distinctive look.",
    link: "",
    pathLink: "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292103/Khoj/Homeware/Tablerunners/jeb74xo4rhpkwwydqpcs.jpg",
    title: "Menswear",
    descArray: ["Khoj's hand-painted menswear collection, including kurtas, shirts, and t-shirts, brings a unique blend of tradition and modernity to your wardrobe. Each piece is meticulously hand-painted with intricate designs, ensuring that no two items are exactly alike. The vibrant colors and artistic patterns make a bold statement, perfect for any occasion. Whether you're attending a festive event or looking for something stylish for casual wear, Khoj's menswear offers a distinctive and fashionable choice.", "Crafted from high-quality fabrics, Khoj's menswear is not only visually appealing but also comfortable to wear. The materials are breathable and durable, making them suitable for everyday use. The hand-painted designs add a touch of individuality and elegance, transforming ordinary attire into extraordinary fashion statements. By choosing Khoj's menswear, you embrace a fusion of art and style, enhancing your personal fashion with unique, handcrafted garments."],
    Category: "Wearables",
    material: "Cotton",
    deliveryTime: "1-2 Weeks",
    tName: "Harsh",
    tDesignation: "A happy customer",
    tReview: "Wearing Khoj's hand-painted kurtas and shirts has truly elevated my style. The unique designs and comfortable fabrics make me feel confident and stand out at every event. ",
    imgArr: ['https://res.cloudinary.com/da5crwlqh/image/upload/v1718292561/Khoj/Wearables/TopsMen/yfwp4dzczalungtcsxjt.jpg', "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292558/Khoj/Wearables/TopsMen/izjyq2liewwmiju9mvkn.jpg", "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292648/Khoj/Wearables/TopsMen/hnwwbieiej3r8g1vzdmy.jpg"]
  },
  {
    imgUrl: 'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292649/Khoj/Wearables/TopsWomen/qpogzk0amghkv8z8vckz.jpg',
    heading: 'Women\'s Tshirts',
    // pageUrl: 'women',
    desc: "Khoj's women's hand-painted t-shirts bring a touch of artistry to everyday wear. Each t-shirt features unique, vibrant designs, making them perfect for those who love to stand out.",
    link: "",
    pathLink: "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292103/Khoj/Homeware/Tablerunners/jeb74xo4rhpkwwydqpcs.jpg",
    title: "Womenswear",
    descArray: [
      "Khoj's women's wear collection offers a perfect blend of style and aesthetics, ensuring that you stand out wherever you go. Each garment is meticulously hand-painted with intricate designs, reflecting a unique artistic flair that sets Khoj apart. From elegant dresses to chic tops, Khoj's collection caters to various tastes and occasions, providing women with fashionable choices that make a statement. The vibrant colors and detailed patterns draw the attention of peers, making you the center of admiration every time you wear them.",

      "Beyond their stunning appearance, Khoj's women's wear is designed with practicality in mind. The high-quality fabrics are not only soft and comfortable but also easy to wash, ensuring that your favorite pieces remain fresh and vibrant after each use. Whether you're heading to a social event or a casual outing, Khoj's women's wear combines beauty and convenience, making it a must-have in your wardrobe. Embrace the fusion of art and fashion with Khoj's stylish and easy-to-maintain garments that enhance your look effortlessly."],

    Category: "Wearables",
    material: "Cotton",
    deliveryTime: "1-2 Weeks",
    tName: "Riya",
    tReview: "I absolutely love Khoj's women's wear! The hand-painted designs are so stylish and always get me compliments. Plus, they're easy to wash and maintain, making them perfect for my busy lifestyle.",
    tDesignation: "A happy customer.",


    imgArr: ['https://res.cloudinary.com/da5crwlqh/image/upload/v1718292684/Khoj/Wearables/TopsWomen/ji8g0cj9eegsvamwrnjr.jpg',
      'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292648/Khoj/Wearables/TopsWomen/ohkqe8dwxafyeg1lbdjz.jpg',
      'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292614/Khoj/Wearables/TopsWomen/jbpmmz2pns3pre4zkh2u.jpg',
      'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292555/Khoj/Wearables/TopsWomen/edtybtf84xqe4ettxnq2.jpg',
      'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292555/Khoj/Wearables/TopsWomen/ofvlmly0oqbttim5hnfe.jpg',
      'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292697/Khoj/Wearables/TopsWomen/djbt1akyqeztmhqoq5wx.jpg',
      'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292585/Khoj/Wearables/Blouse/yymkggpezoqcddjhlxs9.jpg'
    ]
  },
  {
    imgUrl: 'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292677/Khoj/Wearables/WeddingCollection/oetypfpr6lgnxqizsyw7.jpg',
    heading: 'Traditional wear',
    pageUrl: 'traditionalwear',
    desc: "Khoj's traditional wear, hand-painted, combines cultural heritage with artistic elegance. Each piece showcases intricate designs, perfect for celebrating traditions with a modern twist.",
    link: "",
    pathUrl: "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292103/Khoj/Homeware/Tablerunners/jeb74xo4rhpkwwydqpcs.jpg",
    title: "TraditionalWear",
    descArray: [
      "Khoj's traditional wear collection exudes elegance with its finely hand-painted designs and exquisite craftsmanship. Each piece, whether it's a saree, lehenga, or salwar kameez, showcases intricate patterns and vibrant colors that reflect cultural richness and timeless beauty. Beyond aesthetics, Khoj ensures durability by using high-quality fabrics that withstand the test of time and frequent wear. These garments are not only visually stunning but also practical, offering ease of maintenance with simple washing instructions. Whether you're attending a wedding, festival, or cultural event, Khoj's traditional wear promises to enhance your wardrobe with grace and sophistication.",

      "Embrace the allure of tradition with Khoj's collection, where every garment tells a story of artistry and heritage. The hand-painted motifs on each piece capture the essence of Indian culture, making them a cherished addition to any discerning wardrobe. Designed to be versatile and comfortable, Khoj's traditional wear ensures you look and feel your best on every occasion. Experience the blend of elegance and practicality as you adorn yourself in garments that celebrate craftsmanship and timeless style."],
    Category: "Wearables",
    material: "Cotton",
    deliveryTime: "1-2 Weeks",
    tName: "Riya",
    tDesignation: "A happy customer",
    tReview: "I absolutely love Khoj's women's wear! The hand-painted designs are so stylish and always get me compliments. Plus, they're easy to wash and maintain, making them perfect for my busy lifestyle.",
    imgArr: [
      'https://res.cloudinary.com/da5crwlqh/image/upload/v1718292552/Khoj/Wearables/WeddingCollection/j3eufp8x3dygxuymq0yw.jpg',
      "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292669/Khoj/Wearables/WeddingCollection/rxz7eetpl1xss9hulj08.jpg",
      "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292677/Khoj/Wearables/WeddingCollection/oetypfpr6lgnxqizsyw7.jpg"]
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