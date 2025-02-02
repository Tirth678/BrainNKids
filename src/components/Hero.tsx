// import React from 'react';

const Hero = () => {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
      <div className="absolute top-0 w-full h-full bg-center bg-cover"
           style={{
             backgroundImage: "url(https://images.unsplash.com/photo-1735596365888-ad6d151533f2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
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