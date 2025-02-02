import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';

interface Skill {
  id: string;
  title: string;
  description: string;
  icon: any;
  levels: number;
  ageGroup: string;
  skills: string[];
  detailedDescription: string;
  programLevels: string[];
}

interface CourseDetailsProps {
  courses: Skill[];
}

const CourseDetails = ({ courses }: CourseDetailsProps) => {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <div className="pt-24 px-4 text-center">
          <h1 className="text-2xl font-bold text-white">Course not found</h1>
          <Link to="/" className="text-purple-400 hover:text-purple-300 mt-4 inline-block">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const Icon = course.icon;

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/" className="text-purple-400 hover:text-purple-300 mb-6 inline-block">
            ← Back to Programs
          </Link>
          
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-purple-900 rounded-lg flex items-center justify-center">
                <Icon className="h-8 w-8 text-purple-400" />
              </div>
              <h1 className="text-3xl font-bold text-white">{course.title}</h1>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                <h3 className="font-semibold text-purple-400">Age Group</h3>
                <p className="text-gray-300">{course.ageGroup}</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                <h3 className="font-semibold text-purple-400">Total Levels</h3>
                <p className="text-gray-300">{course.levels} Levels</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Program Description</h2>
              <p className="text-gray-300 leading-relaxed">{course.detailedDescription}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Skills You'll Learn</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {course.skills.map((skill, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">Program Levels</h2>
              <div className="grid gap-4">
                {course.programLevels.map((level, index) => (
                  <div key={index} className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                    <h3 className="font-semibold text-purple-400">Level {index + 1}</h3>
                    <p className="text-gray-300">{level}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/#contact"
                className="bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 transition-colors inline-block"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;