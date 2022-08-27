import React from 'react';

const QuestionAndAnswer = () => {
    return (
        <div>
            <div className="FullDiv bg-black py-7">
                <div className="py-10">
                    <h1 className='text-5xl mx-auto text-white' >Frequently Asked Questions</h1>
                </div>
                <div className="collaps w-2/3 mx-auto my-10">
                    <div tabindex="0" class=" mt-1 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div class=" text-white collapse-title text-3xl font-medium">
                            What is netflix ?
                        </div>
                        <div class="collapse-content text-white">
                            <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

                                You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
                        </div>
                    </div>
                    <div tabindex="0" class=" mt-1 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div class="collapse-title text-3xl font-medium text-white">
                            How much does Netflix cost ?
                        </div>
                        <div class="collapse-content text-white">
                            <p>
                                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD3.99 to USD11.99 a month. No extra costs, no contracts.</p>
                        </div>
                    </div>
                    <div tabindex="0" class=" mt-1 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div class="collapse-title text-3xl font-medium text-white">
                            Where can i watch ?
                        </div>
                        <div class="collapse-content text-white">
                            <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                                You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                        </div>
                    </div>
                    <div tabindex="0" class=" mt-1 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div class="collapse-title text-3xl font-medium text-white">
                            How does i cancel ?
                        </div>
                        <div class="text-white collapse-content">
                            <p>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                        </div>
                    </div>
                    <div tabindex="0" class=" mt-1 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div class="collapse-title text-3xl font-medium text-white">
                            What can i watch on Netflix ?
                        </div>
                        <div class="collapse-content text-white">
                            <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                        </div>
                    </div>
                    <div tabindex="0" class=" mt-1 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div class="collapse-title text-3xl font-medium text-white">
                            Is Netflix good for Kids ?
                        </div>
                        <div class="collapse-content text-white">
                            <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

                                Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
                        </div>
                    </div>
                </div>
                <div className="SearchGrup py-4">
                <h5 className='text-white mx-auto text-xl'>Ready to watch? Enter your email to create or restart your membership.</h5>
                <div class="flex w-1/3 mx-auto my-3" >
                    <input type="text" placeholder='Email Address' className='w-10/12 rounded px-3' />
                    <button class="btn rounded px-10 bg-red-600 text-white">Get Started</button>
                  </div>
            </div>
            </div>
        </div>
    );
};

export default QuestionAndAnswer;