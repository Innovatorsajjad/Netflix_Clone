import React from 'react';

const Services = () => {
    return (
        <div className="grid md:grid-cols-2 space-y-4 md:gap-16 container py-16 px-6 items-center">
            <div className=" text-white text-left">
                <h2 className='text-5xl font-bold mb-6'>Enjoy on your TV.</h2>
                <h3 className='text-2xl'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
            </div>
            <div className="">
                <iframe className='w-full h-72'  src="https://www.youtube.com/embed/6Jg_rkKtJgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

    );
};

export default Services;