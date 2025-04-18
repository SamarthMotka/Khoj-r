import React from 'react'
import HomeBg from './HomeBg'
import MindsBehindHome from './MindsBehindHome'
import PortfolioHome from './PortfolioHome'
import Testimonials from './Testimonials'
import DownloadCatalog from './DownloadCatalog'
import HomeCarousel from './HomeCarousel'
import GalleryHome from './GalleryHome'



const image = [
    "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292326/Khoj/Accessories/SunglassesCover/ugktmztbwl2xuopjom4r.jpg",
    "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292408/Khoj/Accessories/Dupattas/wmjriycbiiulxjtpfvbk.jpg",
    "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292355/Khoj/Accessories/Pouches/p5ksw1haw5y1sczzqres.jpg",
    "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292103/Khoj/Homeware/Tablerunners/yrdru2fr8hz6nwhllmbs.jpg",
    "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292160/Khoj/Homeware/Tablemats/frodwicukgdxfsj57sy7.jpg",
]

const Home = () => {
  return (
    <>
        <HomeBg></HomeBg>
        <HomeCarousel image={image} show={true}></HomeCarousel>
        <MindsBehindHome></MindsBehindHome>
        <PortfolioHome></PortfolioHome>
        <GalleryHome></GalleryHome>
        <Testimonials></Testimonials>
        <DownloadCatalog></DownloadCatalog>
    </>
  )
}

export default Home