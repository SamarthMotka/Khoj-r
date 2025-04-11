'use client'
import React from 'react'
import CountUp from 'react-countup';

const AboutUsStats = () => {
    return (
        <div className='bg-white text-center quicksand'>
            <div className='pt-10'>
                <h1 className='text-[#6d567b] text-3xl'>Stats</h1>
                <p className='text-[#6c6d76]'>Our numbers speak for themselves</p>
            </div>
            <div className='flex flex-col sm:flex-row justify-center mt-10 pb-10'>
                <StatCard number={200} label="Happy Clients" />
                <StatCard number={600} label="Orders Delivered" />
                <StatCard number={200} label="Total Products" />
                <StatCard number={3} label="Artists" />
            </div>
        </div>
    )
}

// Reusable Stat Card Component
const StatCard = ({ number, label }) => {
    return (
        <div className='p-6 mx-12'>
            <h1 className='text-[#6d567b] text-3xl'>
                <CountUp start={0} end={number} duration={3} />
            </h1>
            <p className='text-[#6c6d76]'>{label}</p>
        </div>
    );
}

export default AboutUsStats;
