// import React from 'react';

const Hero = () => {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
      <div className="absolute top-0 w-full h-full bg-center bg-cover"
           style={{
             backgroundImage: "url('https://raw.githubusercontent.com/Tirth678/BrainNKids/refs/heads/main/src/assets/DALL%C2%B7E%202025-02-02%2019.22.50%20-%20A%20cheerful%20and%20playful%20scene%20of%20children%20having%20fun%20outdoors%20in%20a%20vibrant%20park.%20The%20setting%20includes%20green%20grass%2C%20trees%2C%20and%20a%20bright%20blue%20sky%20on%20a%20su.webp')"
           }}>
        <span className="w-full h-full absolute opacity-75 bg-black"></span>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="text-white">
              <h1 className="text-5xl font-semibold leading-tight">
                Unlock Your Child's Potential
              </h1>
              <p className="mt-4 text-lg text-gray-300">
                Empowering young minds through innovative educational programs. 
                Join Brain N Kids to give your child the best start in life.
              </p>
              <a
                href="#contact"
                className="bg-purple-600 text-white mt-8 inline-block px-6 py-3 rounded-md hover:bg-purple-700 transition-colors"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;