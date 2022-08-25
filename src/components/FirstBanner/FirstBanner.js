import React from 'react';
import "../FirstBanner/FirstBanner.css"
const FirstBanner = () => {
  return (
    <div className='fullBanner'>
      <div>
        <div className="flex items-center justify-between">
          <a href='/' className="logo w-44"><img src="https://i.ibb.co/CwTPQfx/Netflix-Logo.png" alt="" /></a>
          <button className="btn bg-red-600 px-4 text-white">Sing in</button>
        </div>
      </div>
      <div className="fullHero">
        <div class="hero min-h-screen bg-transparent">
          <div class="hero-content text-center w-1/2">
            <div class="max-w-lg text-white">
              <h1 class="text-5xl font-bold">Unlimited movies, TV shows, and more.</h1>
              <h3 class="py-3 text-3xl">Watch anywhere. Cancel anytime.</h3>
              <h5 className='text-1xl py-2'>Ready to watch? Enter your email to create or restart your membership.</h5>
              <div className="textInput">
                <div class="form-control pt-3 ">
                  <div class="flex" >
                    <input type="text" placeholder='Email Address' className='w-10/12 rounded px-3' />
                    <button class="btn rounded px-10 bg-red-600 text-white">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBanner;