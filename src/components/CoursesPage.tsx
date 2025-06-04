import React from 'react';
import Navbar from './Navbar';
import CourseCard from './CourseCard';
import { courses } from '../App';

const CoursesPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Courses Header */}
      <div className="pt-20 pb-12 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          Our Programs
        </h1>
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
          Discover our comprehensive range of educational programs designed to nurture your child's potential
        </p>
      </div>

      {/* Courses Grid */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
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

export default CoursesPage; 