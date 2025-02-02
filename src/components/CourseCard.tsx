import React from 'react';
import { Link } from 'react-router-dom';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const CourseCard = ({ id, title, description, icon: Icon }: CourseCardProps) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-700 hover:border-purple-500">
      <div className="w-12 h-12 bg-purple-900 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-purple-400" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
      <Link 
        to={`/course/${id}`}
        className="mt-4 text-purple-400 font-medium hover:text-purple-300 inline-block"
      >
        Learn More →
      </Link>
    </div>
  );
};

export default CourseCard;