import React from 'react';
const FirstBanner = () => {
  return (
    <div>
      <div className="fullBanner">
        <div class="hero min-h-screen bg-transparent">
          <div class="hero-content text-center">
            <div class="max-w-lg">
              <h1 class="text-5xl font-bold">Unlimited movies, TV shows, and more.</h1>
              <h3 class="py-6 text-3xl">Watch anywhere. Cancel anytime.</h3>
              <h5 className='text-1xl py-2'>Ready to watch? Enter your email to create or restart your membership.</h5>
              <div className="textInput">
                <div class="form-control pt-3 mx-auto">
                  <div class="input-group" >
                    <input type="text" placeholder="Search…" class="input input-bordered text-white" />
                    <button class="btn bg-red-600">
                      Get Started
                    </button>
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