import React from 'react';
import Navbar from './Navbar';
import { Brain, Users, Award, BookOpen } from 'lucide-react';

const AboutPage = () => {
  const features = [
    {
      icon: Brain,
      title: 'Expert-Led Programs',
      description: 'Our courses are designed and taught by experienced educators who specialize in child development and education.'
    },
    {
      icon: Users,
      title: 'Personalized Learning',
      description: 'We understand that every child is unique. Our programs are tailored to meet individual learning needs and pace.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Our students consistently show remarkable improvement in their academic performance and cognitive abilities.'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: 'From mental arithmetic to creative writing, our curriculum covers essential skills for holistic development.'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* About Header */}
      <div className="pt-20 pb-12 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          About Brain N Kids
        </h1>
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
          Empowering young minds through innovative educational programs since 2024
        </p>
      </div>

      {/* Mission Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="bg-gray-800 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Mission</h2>
          <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto">
            At Brain N Kids, we are committed to nurturing the intellectual and creative potential of every child. 
            Through our innovative teaching methods and comprehensive programs, we aim to develop confident, 
            capable, and curious learners who are well-prepared for future success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                <div className="w-12 h-12 bg-red-900 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-800 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Why Choose Brain N Kids?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <p className="text-gray-300">Small batch sizes for personalized attention</p>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <p className="text-gray-300">Modern teaching methodologies</p>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <p className="text-gray-300">Regular progress assessments</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <p className="text-gray-300">Experienced and qualified faculty</p>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <p className="text-gray-300">Interactive and engaging learning environment</p>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <p className="text-gray-300">Multiple locations across Vadodara</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 Brain N Kids. All rights reserved. T&Cs applied.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage; 