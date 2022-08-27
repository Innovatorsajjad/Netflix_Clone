import React from 'react';

const Services = () => {
    return (
        <div className='bg-black mt-2'>
            <div className="grid md:grid-cols-2 space-y-4 md:gap-16 container py-16 px-6 items-center mb-12 ">
                <div className=" text-white text-left">
                    <h2 className='text-5xl font-bold mb-6'>Enjoy on your TV.</h2>
                    <h3 className='text-2xl'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
                </div>


                <div className="video">
                    <iframe className='w-full h-72' src="https://www.youtube.com/embed/6Jg_rkKtJgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>


            <div className="secondService my-12  grid md:grid-cols-2 space-y-4 md:gap-16 container px-6 items-center flex-col-reverse">
                <div className="image">
                    <img className='w-auto h-72 rounded mx-auto' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
                </div>
                <div className="Texts text-white text-left">
                    <h2 className='text-5xl font-bold mb-6'>Download your shows to watch offline.</h2>
                    <h3 className='text-2xl'>Save your favorites easily and always have something to watch.</h3>
                </div>
            </div>

            <div className="thirdService my-20 text-white grid items-center container text-left">
                <h2 className='text-5xl font-bold mb-6' >Watch everywhere.</h2>
                <h4 className='text-2xl'>Stream unlimited movies and TV shows on <br /> your phone, tablet, laptop, and TV.</h4>
            </div>
            <div className="fourthService mb-2 mt-12 grid md:grid-cols-2 space-y-4 md:gap-16 container px-6 items-center flex-col-reverse">
                <div className="image">
                    <img className='w-auto h-72 rounded mx-auto' src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f" alt="" />
                </div>
                <div className="Texts text-white text-left">
                    <h2 className='text-5xl font-bold mb-6'>Create profiles for kids.</h2>
                    <h3 className='text-2xl'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h3>
                </div>
            </div>

        </div>


    );
};

export default Services;