import React, { useState } from 'react';
import { X } from 'lucide-react';
import { h1 } from 'motion/react-client';

interface EnrollmentPopupProps {
  isOpen: boolean;
  onClose: () => void;
  courseId?: string;
}

const EnrollmentPopup = ({ isOpen, onClose, courseId }: EnrollmentPopupProps) => {
  const [formData, setFormData] = useState({
    studentName: '',
    age: '',
    email: '',
    sex: 'male',
    fatherName: '',
    mobile: '',
    mobile2: '',
    class: '',
    address: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    console.log('Course ID:', courseId);
    setFormData({
      studentName: '',
      age: '',
      email: '',
      sex: 'male',
      fatherName: '',
      mobile: '',
      mobile2: '',
      class: '',
      address: ''
    });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-gray-800 rounded-lg shadow-xl max-w-md w-full relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Book a FREE 3 days Demo Class and Level Test</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="studentName" className="block text-sm font-medium text-gray-300">
                  Name*
                </label>
                <input
                  type="text"
                  id="studentName"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email Id*
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50"
                  required
                />
              </div>
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-300">
                  Mobile Number 1*
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50"
                  required
                />
              </div>
              <div>
                <label htmlFor="mobile2" className="block text-sm font-medium text-gray-300">
                  Mobile Number 2
                </label>
                <input
                  type="tel"
                  id="mobile2"
                  name="mobile2"
                  value={formData.mobile2}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="class" className="block text-sm font-medium text-gray-300">
                  Student's Class
                </label>
                <input
                  type="text"
                  id="class"
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 px-4 rounded-md hover:bg-red-700 transition-colors"
              >
                Submit Enrollment
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnrollmentPopup;
