// import React from 'react';
import background from "../assets/WhatsApp Image 2025-02-03 at 10.01.22.jpeg"
const Hero = () => {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
      <div className="absolute top-0 w-full h-full bg-center bg-cover"
           style={{
             backgroundImage: `url(${background})`
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
                className="bg-red-600 text-white mt-8 inline-block px-6 py-3 rounded-md hover:bg-red-800 transition-colors"
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