import React from 'react'
import { useState } from 'react'

const FAQ = () => {

    const [open, setOpen] = useState(null);

    const toggleFAQ = (index) => {
        setOpen(open === index ? null : index)
    }

    const faqData = [
        {
            question: "What type of colors do we use?",
            answer:
                "We paint our products with the highest quality fabric paints. Hence, once the colors are applied it stays on the fabric with its great effects.",
        },
        {
            question: "How does the fabric turn out to be?",
            answer:
                "The colors apply differently on different types of fabrics. Hence, some fabrics may take a harder form and give a paper feeling. It is advisable to use higher quality fabrics.",
        },
        {
            question: "On what type of fabrics can it be painted?",
            answer:
                "We use hand painting as a rafu patch on some waste fabrics & old stained clothes as well. Hence, it looks beautiful on any light plain fabrics.",
        },
        {
            question: "What is the payment policy?",
            answer:
                "As a confirmation of your order & to keep us running as a venture, the customer has to pay 50% of the amount just after the order is placed. The remaining 50% of the amount is to be paid after the order is received.",
        },
        {
            question: "How many days does it generally take to paint?",
            answer:
                "A minimum of 5-7 days is required to paint on a basic garment as it involves a detailed process of drawing, design decision, color finalization and the finishing touches of our artisans.",
        },
        {
            question: "Return policy",
            answer:
                "We would confirm with the customer before dispatching the order. Hence, only in extreme conditions if the product is damaged then it would be accepted.",
        },
        {
            question: "Care Instructions",
            answer: (
                <ul className="list-disc pl-6">
                    <li>Hand wash gently with mild detergent in lukewarm water.</li>
                    <li>Avoid bleach and harsh chemicals.</li>
                    <li>Iron on low heat or from the reverse side.</li>
                    <li>Handle with care to prevent scratching or damage.</li>
                    <li>Consider professional cleaning for delicate items.</li>
                </ul>
            ),
        },
    ];

    return (
        <div className='text-[#6c6d76]  bg-white py-10 px-8 lg:px-[18rem] quicksand'>
            <h1 className='text-3xl md:text-5xl mb-10  my-3 text-center text-[#6d567b]'>Frequently Asked Questions</h1>
            <div className='text-lg border border-gray-300 rounded-md'>
                {faqData.map((item, index) => (
                    <div key={index}
                        className={`${index === '7' ? "" : "border-b"} border-gray-300 cursor-pointer`}
                        onClick={() => toggleFAQ(index)} >

                        <h1 className=" my-3 mx-5 text-[#6d567b] flex justify-between items-center">
                            {item.question}
                            <span className="text-3xl p-2">
                                {open === index ? "−" : "+"}
                            </span>
                        </h1>
                        <div
                            className={`overflow-hidden transition-all duration-400 ease-linear ${open === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <div className="pb-4 py-3 px-5 border-t border-gray-300 text-lg text-gray-700">
                                {item.answer}
                            </div>
                        </div>
                    </div>

                ))}

                {/* <div>
                  <h1> What type of colors do we use?</h1>
                  <p>We paint our products with the highest quality fabric paints. Hence, once the colors are applied it stays on the fabric with its great effects.</p>
            </div>
            <div>
                  <h1>How does the fabric turn out to be?</h1>
                  <p>The colors apply differently on different types of fabrics. Hence, some fabrics may take a harder form and give a paper feeling. It is advisable to use higher quality fabrics.</p>
            </div>
            <div>
                  <h1>On what type of fabrics can it be painted?</h1>
                  <p>We use hand painting as a rafu patch on some waste fabrics & old stained clothes as well. Hence, it looks beautiful on any light plain fabrics.</p>
            </div>
            <div>
                  <h1> What is the payment policy?</h1>
                  <p>As a confirmation of your order & to keep us running as a venture, the customer has to pay 50% of the amount just after the order is placed. The remaining 50% of the amount is to be paid after the order is received.</p>
            </div>
            <div>
                  <h1>How many days does it generally take to paint?</h1>
                  <p>A minimum of 5-7 days is required to paint on a basic garment as it involves a detailed process of drawing, design decision, color finalization and the finishing touches of our artisans.</p>
            </div>
            <div>
                  <h1>Return policy</h1>
                  <p>We would confirm with the customer before dispatching the order. Hence, only in extreme conditions if the product is damaged then it would be accepted.</p>
            </div>
            <div>
                  <h1>Care Instructions</h1>
                
                      <ul>
                          <li>Hand wash gently with mild detergent in lukewarm water.</li>
                          <li>Avoid bleach and harsh chemicals.</li>
                          <li>Iron on low heat or from the reverse side.</li>
                          <li>Handle with care to prevent scratching or damage.</li>
                          <li>Consider professional cleaning for delicate items.</li>
                      </ul>
                
            </div> */}
            </div>
        </div>
    )
}

export default FAQ