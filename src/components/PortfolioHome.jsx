import React from 'react'
import { useState } from 'react';

const PortfolioHome = () => {


    const items = [
        {
            name: "Womenswear",
            img: "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292543/Khoj/Wearables/TopsWomen/w1tacubc06e02chcnm5s.jpg",
            heading: "High-quality designer wearables",
            line1: "Khoj has something for everyone. Explore our inclusive range and discover the joy of self-expression through artful fashion.",
            line2: "Our women's collection is a celebration of femininity and grace, meticulously hand-painted to give you a vibe of who you really are. Explore our curated selection and discover the perfect blend of style and craftsmanship.",
        },
        {
            name: "Menswear",
            img: "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292540/Khoj/Wearables/TopsMen/yerlpyw5seo3evczw1dx.jpg",
            heading: "High-quality designer wearables",
            line1: "Khoj:- Where style knows no age and every man can find his signature look.",
            line2: "Our collection is designed to empower men of all generations, offering hand-painted garments that blend timeless sophistication with modern flair. From tailored shirts to relaxed kurtas, each piece is crafted to accommodate a diverse range of sizes and preferences.",
        },
        {
            name: "Kidswear",
            img: "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292540/Khoj/Wearables/Kids/qvqsw3uirtfpnvfgoezr.jpg",
            heading: "High-quality designer wearables",
            line1: "Khoj is a free space to explore your inner child so how can we forget our cute little Khojis.",
            line2: "Whether your little one is a budding artist or a playful adventurer, Khoj invites you to explore our inclusive range and discover the delight of dressing your child in artful fashion that celebrates their individuality.",
        },
        {
            name: "Accessories",
            img: "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292377/Khoj/Accessories/Pouches/rgeiap5vplop4sdnwiac.jpg",
            heading: "Accessories that goes with your outfits.",
            line1: "Dive into the playful world of Khoj's accessories, where every item is infused with a dash of fun!.",
            line2: "From funky bags to quirky pouches, snazzy sunglasses covers, and aprons, our collection is bursting with personality. Let your accessories reflect your vibrant spirit and unique style as you add a pop of color and joy to your everyday look. Get ready to turn heads and spread smiles with Khoj's playful accessories!",
        },
    ]

    const [selectedPortfolio, setSelectedPortfolio] = useState(items[0]);

    return (
        <div className="p-10 lg:px-30 bg-white text-[#686d76] quicksand">
            <div className='flex justify-center'>
                <ul className="flex flex-col justify-center md:flex-row md:justify-center md:align-middle mb-10 lg:mb-0 w-full sm:w-[60%]">
                    {items.map((item) => (
                        <li key={item.name} className={`cursor-pointer text-center border-b-4 mx-6 my-2 pb-3 px-4 lg:px-12 ${selectedPortfolio.name === item.name ? "border-[#6d567b] " : "text-[#686d76] border-transparent"} `}
                            onClick={() => setSelectedPortfolio(item)}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col-reverse justify-center lg:flex-row xl:flex-row md:py-12 ">
                <div className=" lg:p-[70px] text-center lg:text-start w-full lg:max-w-[60%]">
                    <h2 className="my-6 lg:my-4 justify-center text-4xl font-bold text-[#6d567b] md:my-6">
                        {selectedPortfolio.heading}
                    </h2>
                    <p className="md:my-4 md:p-2 italic">
                        {selectedPortfolio.line1}
                    </p>
                    <p className="lg:indent-8 my-4">
                        {selectedPortfolio.line2}
                    </p>

                </div>
                <div className=" flex justify-center ">
                    <img src={selectedPortfolio.img} className="aspect-auto max-h-[500px] lg:max-w-[440px] "></img>
                </div>
            </div>
        </div>

    )
}

export default PortfolioHome