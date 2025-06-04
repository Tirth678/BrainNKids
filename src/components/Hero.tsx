import React from 'react';
import background from "../assets/hero-background.webp"; // Using the DALL-E generated image

const Hero = () => {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
      <div 
        className="absolute top-0 w-full h-full bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <span className="w-full h-full absolute opacity-75 bg-black"></span>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-red-600 mb-4">
                Unlock Your Child's Potential
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                Empowering young minds through innovative educational programs. 
                Join Brain N Kids to give your child the best start in life.
              </p>
              <a
                href="#contact"
                className="bg-red-600 text-white mt-8 inline-block px-8 py-3 rounded-md hover:bg-red-700 transition-colors text-lg font-semibold"
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