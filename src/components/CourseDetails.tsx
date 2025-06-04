import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../App';
import Navbar from './Navbar';
import EnrollmentPopup from './EnrollmentPopup';

const CourseDetails = () => {
  const { courseId } = useParams();
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  
  const course = courses.find(c => c.id === courseId);
  
  if (!course) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <div className="pt-20 px-4 max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center">Course not found</h1>
          <Link to="/" className="mt-4 text-red-400 hover:text-red-300 block text-center">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const Icon = course.icon;

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Course Header */}
      <div className="pt-20 pb-12 px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-16 bg-red-900 rounded-lg flex items-center justify-center">
            <Icon className="h-8 w-8 text-red-400" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">{course.title}</h1>
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-8">{course.description}</p>
        <div className="flex justify-center">
          <button
            onClick={() => setIsEnrollmentOpen(true)}
            className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors"
          >
            Enroll Now
          </button>
        </div>
      </div>

      {/* Course Details */}
      <div className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Course Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Course Overview</h2>
              <p className="text-gray-300 whitespace-pre-line">{course.detailedDescription}</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Age Group</h2>
              <p className="text-gray-300">{course.ageGroup}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Program Levels</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {course.programLevels.map((level, index) => (
                  <li key={index}>{level}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Skills & Benefits */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Skills You'll Develop</h2>
              <div className="grid grid-cols-2 gap-4">
                {course.skills.map((skill, index) => (
                  <div key={index} className="bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-300">{skill}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Why Choose This Course?</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Expert-led instruction with personalized attention
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Interactive and engaging learning methods
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Regular progress assessments and feedback
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Small batch sizes for better learning outcomes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Enrollment Popup */}
      <EnrollmentPopup 
        isOpen={isEnrollmentOpen}
        onClose={() => setIsEnrollmentOpen(false)}
        courseId={courseId}
      />

      {/* Footer */}
      <footer className="bg-black text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Link to="/" className="text-red-400 hover:text-red-300">
            ← Back to Home
          </Link>
          <p className="mt-4">© 2024 Brain N Kids. All rights reserved. T&Cs applied.</p>
        </div>
      </footer>
    </div>
  );
};

export default CourseDetails;
