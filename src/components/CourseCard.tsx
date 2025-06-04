import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CourseCard: React.FC<CourseCardProps> = ({ id, title, description, icon: Icon }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
      <div className="w-12 h-12 bg-red-900 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-red-400" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <Link 
        to={`/course/${id}`}
        className="text-red-400 hover:text-red-300 font-medium inline-flex items-center"
      >
        Learn More
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

export default CourseCard;